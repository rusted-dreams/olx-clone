const express = require("express");

const app = express();

const port = 6969;
app.get("/", (req, res) => {
    res.send("hello world");
})
app.listen(port, () => {
    console.log(`backend is up on port ${port}`);
})