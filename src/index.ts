import express from "express";

const app = express();

app.get("/", (req, res) => {
    // hello world handler
    res.send({"hello": "there"});
})

app.listen(5001);