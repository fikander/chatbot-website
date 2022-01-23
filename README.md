# chatbot-website

## Dev

Create `.env` file with:

    GOOGLE_PROJECT_ID=reactpageagent-bvkl
    DIALOGLOW_SESSION_ID=reactpageagent-bvkl
    DIALOGFLOW_SESSION_LANGUAGE_CODE=en-US
    GOOGLE_CLIENT_EMAIL=chatbot-website@reactpageagent-bvkl.iam.gserviceaccount.com
    GOOGLE_PRIVATE_KEY='"-----BEGIN PRIVATE KEY----- ... -----END PRIVATE KEY-----\n"'

Then:

    npm run dev

## Deployment

    git push heroku master

or

    npm run deploy
