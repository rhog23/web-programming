import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB(); // checks if successfully connected to mongodb
    const newPrompt = new Prompt({ creator: userId, prompt: prompt, tag: tag });

    await newPrompt.save(); // saving the new prompt to db

    // generate response
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    // return status 500 -> server error
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
