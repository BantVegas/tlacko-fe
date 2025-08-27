// api/comgate-create.ts
// Variant 2: request na Comgate ide cez proxy (napr. Fixie) so statickou IP.
// -> nastav env premennú FIXIE_URL a pridaj tú IP do "Povolené IP adresy" v Comgate.

import { ProxyAgent } from "undici";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { priceEur, label, refId, email, fullName } = req.body || {};
    if (priceEur == null || !label || !refId) {
      return res
        .status(400)
        .json({ ok: false, error: "Missing priceEur|label|refId" });
    }

    // bezpečnostná brzda – niektoré metódy nepovoľujú < 1.00 €
    const totalEur = Number(priceEur);
    if (!Number.isFinite(totalEur) || totalEur < 1) {
      return res
        .status(400)
        .json({ ok: false, error: "Minimálna suma pre platbu je 1.00 €" });
    }

    const merchant = process.env.COMGATE_MERCHANT!;
    const secret = process.env.COMGATE_SECRET!;
    const baseUrl =
      process.env.PUBLIC_BASE_URL || "https://example.com";

    const payload = {
      test: String(process.env.COMGATE_TEST) === "true",
      country: process.env.COMGATE_COUNTRY || "SK",
      price: Math.round(totalEur * 100), // centy
      curr: process.env.COMGATE_CURRENCY || "EUR",
      label: String(label).slice(0, 16),
      refId: String(refId),
      method: process.env.COMGATE_METHOD || "ALL",
      email: email || undefined,
      fullName: fullName || undefined,
      lang: "sk",
      // Comgate si ${id} a ${refId} dosadí na svojej strane – preto escapeujeme $
      url_paid: `${baseUrl}/checkout/success?id=\${id}&refId=\${refId}`,
      url_cancelled: `${baseUrl}/checkout/cancel?id=\${id}&refId=\${refId}`,
      url_pending: `${baseUrl}/checkout/pending?id=\${id}&refId=\${refId}`,
    };

    // Proxy cez Fixie (alebo inú) – ak FIXIE_URL nie je nastavené, pôjde to priamo
    const dispatcher = process.env.FIXIE_URL
      ? new ProxyAgent(process.env.FIXIE_URL)
      : undefined;

    const resp = await fetch(
      "https://payments.comgate.cz/v2.0/payment.json",
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`${merchant}:${secret}`).toString("base64"),
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        // undici špecifická voľba – funguje vo vercel/serverless runtime
        ...(dispatcher ? { dispatcher } : {}),
      }
    );

    const data = await resp.json().catch(() => ({} as any));

    if (!resp.ok || data.code !== 0) {
      return res.status(400).json({
        ok: false,
        error: data?.message || "Comgate odmietol požiadavku",
        code: data?.code ?? resp.status,
        details: data,
      });
    }

    // úspech -> { code:0, message:"OK", transId:"...", redirect:"..." }
    return res.status(200).json({ ok: true, ...data });
  } catch (e: any) {
    return res
      .status(500)
      .json({ ok: false, error: e?.message || "Server error" });
  }
}


