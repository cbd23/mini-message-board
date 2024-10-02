// default imports
import express from "express"
import { fileURLToPath } from 'url'
import path from "path"

// import routers
import indexRouter from "./routes/indexRouter.js"
import newRouter from "./routes/newRouter.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// handle routes using Express Router
app.use("/new", newRouter)
app.use("/", indexRouter)


const PORT = 3000
app.listen(3000, () => {
    console.log(`mini messsage board is running on PORT:${PORT}`)
})