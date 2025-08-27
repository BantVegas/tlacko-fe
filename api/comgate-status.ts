import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  const transId = String(req.query.transId || "");
  if (!transId) return res.status(400).json({ error: "Missing transId" });

  const merchant = process.env.COMGATE_MERCHANT!;
  const secret   = process.env.COMGATE_SECRET!;

  const url = `https://payments.comgate.cz/v2.0/payment/transId/${encodeURIComponent(transId)}.json`;
  const resp = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: "Basic " + Buffer.from(`${merchant}:${secret}`).toString("base64"),
      Accept: "application/json",
    },
  });

  const data = await resp.json();
  return res.status(resp.status).json(data);
}
