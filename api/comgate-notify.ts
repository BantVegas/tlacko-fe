import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Comgate môže poslať JSON (REST) alebo x-www-form-urlencoded (HTTP-POST v1.0)
  let data: any = {};
  const ctype = String(req.headers["content-type"] || "");
  if (req.method === "POST") {
    if (ctype.includes("application/json")) data = req.body;
    else {
      // Vercel parsuje form automaticky len ak je malé; fallback:
      const text = req.body && typeof req.body === "string" ? req.body : "";
      text.split("&").forEach((kv: string) => {
        const [k, v] = kv.split("=");
        if (k) data[decodeURIComponent(k)] = decodeURIComponent(v || "");
      });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const transId = data?.transId as string | undefined;
    if (!transId) {
      // staršie push-e môžu neposlať JSON; vždy si vieme vytiahnuť z query
      const qTransId = String((req.query && (req.query as any).transId) || "");
      if (qTransId) data.transId = qTransId;
    }

    // Bezpečné overenie – dotaz na status
    if (data?.transId) {
      const verify = await fetch(`${process.env.PUBLIC_BASE_URL}/api/comgate-status?transId=${encodeURIComponent(data.transId)}`);
      const status = await verify.json();
      // TODO: tu ulož stav objednávky (PENDING/PAID/CANCELLED) do DB
      // a skontroluj price/curr/refId proti očakávaným hodnotám.
      console.log("Comgate status", status);
    }

    // potvrď prijatie 2xx, inak Comgate retryuje push
    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: e?.message || "Webhook error" });
  }
}
