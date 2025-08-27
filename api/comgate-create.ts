import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  try {
    const { priceEur, label, refId, email, fullName } = req.body || {};
    if (!priceEur || !label || !refId) {
      return res.status(400).json({ ok: false, error: "Missing priceEur|label|refId" });
    }

    const merchant = process.env.COMGATE_MERCHANT!;
    const secret   = process.env.COMGATE_SECRET!;
    const baseUrl  = process.env.PUBLIC_BASE_URL || "http://localhost:5174";

    const payload = {
      test: String(process.env.COMGATE_TEST) === "true",
      country: process.env.COMGATE_COUNTRY || "SK",
      price: Math.round(Number(priceEur) * 100), // centy
      curr: process.env.COMGATE_CURRENCY || "EUR",
      label: String(label).slice(0, 16),
      refId: String(refId),
      method: process.env.COMGATE_METHOD || "ALL",
      email: email || undefined,
      fullName: fullName || undefined,
      lang: "sk",
      url_paid:      `${baseUrl}/checkout/success?id=\${id}&refId=\${refId}`,
      url_cancelled: `${baseUrl}/checkout/cancel?id=\${id}&refId=\${refId}`,
      url_pending:   `${baseUrl}/checkout/pending?id=\${id}&refId=\${refId}`,
    };

    const resp = await fetch("https://payments.comgate.cz/v2.0/payment.json", {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`${merchant}:${secret}`).toString("base64"),
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();
    if (!resp.ok || data.code !== 0) {
      return res.status(400).json({ ok: false, error: data });
    }

    // { code:0, message:"OK", transId:"...", redirect:"..." }
    return res.status(200).json({ ok: true, ...data });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || "Server error" });
  }
}
