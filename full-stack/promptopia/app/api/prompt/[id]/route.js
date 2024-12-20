/* get, patch (update), & delete */
import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

/* GET */
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.findById(params.id).populate("creator");

    if (!prompts) {
      return new Response(JSON.stringify("Prompt not found"), { status: 404 });
    }

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch the prompt"), {
      status: 500,
    });
  }
};

/* PATCH */
export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response(JSON.stringify("Prompt not found"), { status: 404 });
    }

    /* replaceing the existing prompt with the new */
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    /* saving to db */
    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch the prompt"), {
      status: 500,
    });
  }
};

/* DELETE */
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndRemove(params.id);

    return new Response(JSON.stringify("Prompt deleted successfully"), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify("Failed to fetch the prompt"), {
      status: 500,
    });
  }
};
