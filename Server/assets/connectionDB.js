import mongoose from "mongoose";

async function connectionDB(url) {
    await mongoose.connect(url);
}

export default connectionDB;