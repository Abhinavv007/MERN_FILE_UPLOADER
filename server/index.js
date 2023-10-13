import cors from "cors"
import express from "express"
import dbConnect from "./config/db.js"
import router from "./routes/userRoutes.js"

const app = express()
app.use(express.json())
app.use(cors())
dbConnect()
app.use("/api",router)
app.use(express.static("public/upload"))

app.listen(9000,()=>{
    console.log("Server started")
})
