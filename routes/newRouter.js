import { Router } from "express"
import { messages } from "./indexRouter.js"

const newRouter = Router()

newRouter.get("/", (req, res) => {
    res.render("new")
})

newRouter.post("/", (req, res) => {
    let message = req.body.message
    let username = req.body.username

    messages.push({text: message, user: username, added: new Date() })

    res.redirect("/")
})

export default newRouter