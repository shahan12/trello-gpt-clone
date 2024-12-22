const { Configuration, OpenAIApi } = require("openai");

// Configure the OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY // Replace with your API key
});
export const openai = new OpenAIApi(configuration);