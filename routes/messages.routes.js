
const { Router } = require("express");

const messageRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


messageRouter.get("/")

module.exports = messageRouter;
