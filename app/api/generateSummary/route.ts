import { NextResponse } from "next/server";
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
export async function POST(request:Request) {

        const {todos} = await request.json();
        // const response = await openai.chat.completions.create({
        //     model: "gpt-3.5-turbo",
        //     temperature:0.8,
        //     n:1,
        //     stream:false,
        //     max_tokens:100,
        //     messages:[
        //         {
        //             role:"system",
        //             content:`Welcome! Provide a summary of the following todos. Here's the data:${JSON.stringify(todos)}`
        //         }
        //     ]
        // })
        const mockResponse = {
            choices: [
                {
                    message: {
                        content: `Mock summary of the todos: ${JSON.stringify(todos)} , Your free OpenAI usage has expired please add credits`,
                    },
                },
            ],
        };
        return NextResponse.json(mockResponse.choices[0]?.message?.content);
}