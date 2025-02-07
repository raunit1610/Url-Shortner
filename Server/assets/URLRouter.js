import express from "express";
import { handleGenerateNewShortURL, handleGetAnalytics} from "../Controller/URL.js";

const URLRouter = express.Router();

URLRouter.post("/", handleGenerateNewShortURL);

URLRouter.get("/:shortId", handleGetAnalytics);

export default URLRouter;