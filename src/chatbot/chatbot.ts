import dialogflow from "@google-cloud/dialogflow";
import config from "../config";
import  { struct } from "pb-util";

const projectId = config.googleProjectId;
const sessionId = config.dialogFlowSessionId;

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}

const sessionClient = new dialogflow.SessionsClient({ projectId, credentials });
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);


export const getToken = async () => {
    return "";
};

export const eventQuery = async (event: string, userID: string, parameters: any) => {
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                name: event,
                parameters: parameters ? struct.encode(parameters) : null,
                languageCode: config.dialogFlowSessionLanguageCode
            }
        }
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return responses;
};

export const textQuery = async (text: string, userID: string, parameters: any) => {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text,
                languageCode: config.dialogFlowSessionLanguageCode
            }
        },
        queryParams: {
            payload: {
                data: parameters ? struct.encode(parameters) : null
            }
        }
    };

    const responses = await sessionClient.detectIntent(request as any);
    console.log("Detected intent");
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
        console.log(`  Intent: ${result.intent.displayName}`);
    } else {
        console.log("  No intent matched.");
    }
    return responses;
};
