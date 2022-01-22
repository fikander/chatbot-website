import express from "express";
import path from "path";

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    // hello world handler
    res.send({"hello": "there"});
})

app.listen(5001);