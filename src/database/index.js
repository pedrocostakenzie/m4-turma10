import mongoose from "mongoose";
import { config } from "dotenv";

config()
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
mongoose.Promise = global.Promise

export default mongoose;