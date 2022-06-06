import express from "express";
import router from "./routes/tarefas.js";

const app = express()

app.use(express.json())
app.use("/tarefas", router)

app.listen(3000, () => console.log("Server is running on http://localhost:3000/ 🚀"))