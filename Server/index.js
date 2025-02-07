import express from "express";
import cors from "cors";
import connectionDB from "./assets/connectionDB.js";
import URLRouter from "./assets/URLRouter.js";
import URL from "./Model/URL.js";

const app = express();
const PORT = 3000;

connectionDB("mongodb://127.0.0.1:27017/url-shortner").then(() => console.log("Connected to Database")).catch((err) => console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/url", URLRouter);
app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortId });
    entry.visitstamp.push({ timestamp: Date.now()});
    await entry.save();
    return res.redirect(entry.receivedId);
})

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));