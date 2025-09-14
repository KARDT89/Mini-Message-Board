const express = require("express");
const app = express();
const path = require("node:path");
const messageRouter = require("./routes/messages.routes.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", messageRouter)

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(
        `My first Express app - listening on port http://localhost:${PORT}`
    );
});
