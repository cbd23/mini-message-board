import { Router } from "express"
import { messages } from "./indexRouter.js"

const messageRouter = Router()

messageRouter.get("/:index", (req, res) => {

    const msgIndex = req.params.index 

    res.render("message", {messages: messages, msgIndex: msgIndex})
})

export default messageRouter