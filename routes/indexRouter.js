import { Router } from "express"

const indexRouter = Router()

export const messages = [
    {
      text: "Let it be!",
      user: "Paul",
      added: new Date()
    },
    {
      text: "Stay hungry! Stay foolish!",
      user: "Steve",
      added: new Date()
    },
    {
        text: "I'm so sick",
        user: "Ne-Yo",
        added: new Date()
    }
  ]

indexRouter.get("/", (req, res) => {
    res.render("index", {messages: messages})
})

export default indexRouter