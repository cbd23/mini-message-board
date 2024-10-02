import { Router } from "express"

const newRouter = Router()

newRouter.get("/", (req, res) => {
    res.render("new")
})

export default newRouter