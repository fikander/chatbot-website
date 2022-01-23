const config = {
    googleProjectId: process.env.GOOGLE_PROJECT_ID,
    dialogFlowSessionId: process.env.DIALOGLOW_SESSION_ID,
    dialogFlowSessionLanguageCode: process.env.DIALOGFLOW_SESSION_LANGUAGE_CODE,
    googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
    googlePrivateKey: JSON.parse(process.env.GOOGLE_PRIVATE_KEY)
};

export default config;
