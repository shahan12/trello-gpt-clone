import { openai } from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request:Request) {

        const {todos} = await request.json();
        console.log(todos)
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            temprature:0.8,
            n:1,
            stream:false,
            message:[
                {
                    role:"system",
                    content:`Welcome there, provide a summary of following todos, Count how many todos are in each catagory such that to do , in progress and done then tell user to have a productiove day! Here's the data: ${JSON.stringify(todos)}`
                }
            ]
        })

        const {data} = response

        return NextResponse.json(data.choices[0].message);
}