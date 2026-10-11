# Make it live (about 20 minutes, works from a phone)

You need: your GitHub site (already online) + a free gateway that holds your AI key + one AI key.
The gateway is `worker.js`. The key is NEVER put in the website or on GitHub.

## Step 1: update the website
1. Unzip `github-pages-FINAL2.zip`.
2. GitHub repository -> Add file -> Upload files -> select ALL files -> replace -> Commit.
3. Settings -> Pages -> branch `main`, folder `/ (root)`. Open the link in a private tab.

## Step 2: get one AI key
Pick one provider (OpenAI, Anthropic, Google Gemini, DeepSeek or another OpenAI-compatible one).
Create an API key on its website. Copy the exact MODEL NAME from its docs page. Check its pricing and free limits yourself.
Never paste the key in a chat or on GitHub. If you ever do, delete it and make a new one.

## Step 3: create the gateway (Cloudflare Workers)
(Button names may differ slightly from what I describe, because I cannot see the current screens.)
1. Make a free account at dash.cloudflare.com.
2. Workers & Pages -> Create -> Create Worker -> give it a name -> Deploy.
3. Open it -> Edit code -> delete the sample -> paste ALL of `worker.js` -> Deploy.
4. Settings -> Variables and Secrets -> add:
   - `AI_KEY`        (type: Secret)  your AI key
   - `ACCESS_CODE`   (type: Secret)  a long random code you invent (12+ characters)
   - `PROVIDER`      `openai` or `anthropic` or `gemini`
   - `MODEL`         exact model name from your provider
   - `ALLOWED_ORIGIN` `https://YOURNAME.github.io`  (origin only, no folder path)
   - `BASE_URL`      only for OpenAI-compatible providers other than OpenAI (example: `https://api.deepseek.com`)
5. Copy the gateway address, like `https://name.yourname.workers.dev`.
6. Open `https://name.yourname.workers.dev/health` in your browser. You should see `"llm":true`.

## Step 4: connect the website
Open your site -> Log in (sign-in page) -> paste the gateway address and your access code -> Sign in.
Or: Dashboard -> Settings -> Live AI connection -> Save -> Test.
Then open AI Chatbot or AI Assistant and ask something. Answers now come from your AI with Wikipedia sources.

## Troubleshooting
- "Wrong access code": the code in the site must match `ACCESS_CODE` exactly.
- "Cannot reach the gateway": wrong address, or the gateway is not deployed.
- "AI provider returned an error": check AI_KEY, MODEL and PROVIDER.
- `"llm":false` on /health: AI_KEY or MODEL is missing.

## Know the limits
- One shared access code, not user accounts. Anyone who has the code can use your AI credits.
- Chats are saved only in the browser you use. No cloud history, no sign-up, no billing.
- Check prices and limits of Cloudflare and your AI provider before sharing the code with others.
- Health and expert modes give general information only, not professional advice.
