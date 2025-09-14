const { Router } = require("express");

const messageRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

messageRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
});

messageRouter.get("/new", (req, res) => {
    res.render("form.ejs");
});

messageRouter.post("/new", (req, res) => {
    const { authorName, messageText } = req.body;
    messages.push({ text: messageText, user: authorName, added: new Date() });
    res.redirect("/")
    
});

module.exports = messageRouter;
