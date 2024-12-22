import { OpenAI } from "openai";

// Configure the OpenAI API
export const openai  = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this environment variable is set
});
