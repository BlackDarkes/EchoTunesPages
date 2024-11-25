const express = require("express")

const POST = 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("HEllo");
});

app.listen(POST, () => console.log("Server start..."))