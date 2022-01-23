import { Router } from "express";
import { textQuery, eventQuery, getToken } from "../chatbot/chatbot";

const router = Router();

router.post("/api/df_text_query", async (req, res) => {
    console.log(req.body);
    let responses = await textQuery(req.body.text, req.body.userID, req.body.parameters);
    res.send(responses[0].queryResult);
});

router.post("/api/df_event_query", async (req, res) => {
    let responses = await eventQuery(req.body.event, req.body.userID, req.body.parameters);
    res.send(responses[0].queryResult);
});

router.get("/api/get_client_token", async (req, res) => {
    let token = await getToken();
    res.send({ token });
});

router.get("/", (req, res) => {
    res.send("Hello World!");
});

export default router;
