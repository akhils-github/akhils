"use server";

import { GoogleGenerativeAI } from '@google/generative-ai';



export async function sendMessage() {
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const chat = model.startChat({ history: [] });

    const result1 = await chat.sendMessage(
        'In one sentence, explain how a computer works to a young child.',
    );
    console.log(result1.response.text());

    const result2 = await chat.sendMessage(
        'Okay, how about a more detailed explanation to a high schooler?',
    );
    console.log(result2.response.text());
}