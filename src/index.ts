import "dotenv/config";

import express from "express";
import path from "path";
import bodyParser from "body-parser";
import dialogFlowRoutes from "./routes/dialogFlowRoutes";

const app = express();

app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/", dialogFlowRoutes);

if (process.env.NODE_ENV === "production") {
    // js and css files
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

app.listen(process.env.PORT || 5001);
