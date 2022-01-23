import express from "express";
import path from "path";
import bodyParser from "body-parser";
import dialogFlowRoutes from "./routes/dialogFlowRoutes";

console.log("credentials: " + process.env.GOOGLE_APPLICATION_CREDENTIALS);

const app = express();

app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use("/" , dialogFlowRoutes);

app.listen(process.env.PORT || 5001);