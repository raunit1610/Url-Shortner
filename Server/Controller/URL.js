import URL from "../Model/URL.js";
import ShortUniqueId from "short-unique-id";

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ message: "URL is required" });

  const shortId = new ShortUniqueId({ length: 8 });
  const id = shortId.rnd();

  await URL.create({
    shortId: id,
    receivedId: body.url,
  });
  return res.status(200).json({ url: `http://localhost:3000/${id}` });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params?.shortId;
  const entry = await URL.findOne({ shortId });
  return res.status(200).json({
    url: entry.receivedId,
    count: entry.visitstamp.length,
    id: entry.visitstamp,
  });
}
export { handleGenerateNewShortURL, handleGetAnalytics};
