import express from "express"
import { fileURLToPath } from 'url'
import path from "path"

import indexRouter from "./routes/indexRouter.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use("/", indexRouter)

app.get("/new", (req, res) => {
    res.render("new")
})


const PORT = 3000
app.listen(3000, () => {
    console.log(`mini messsage board is running on PORT:${PORT}`)
})