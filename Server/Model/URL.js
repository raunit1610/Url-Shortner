import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    receivedId: {
        type: String,
        required: true,
    },
    visitstamp: [{ timestamp: Number }]
}, {
    timestamps: true
});

const URL = mongoose.model("url", urlSchema);

export default URL;