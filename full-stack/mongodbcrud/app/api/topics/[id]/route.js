import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
  try {
    // Extracting values from request parameters and body
    const { id } = params;
    const { newTitle: title, newDescription: description } =
      await request.json();

    // Ensure a connection to MongoDB before updating the topic
    await connectMongoDB();

    // Update the topic in the database
    await Topic.findByIdAndUpdate(id, { title, description });

    // Respond with a success message and status code 200 (OK)
    return NextResponse.json({ message: "Topic updated" }, { status: 200 });
  } catch (error) {
    // Handle errors and respond with an appropriate error message
    console.error("[ERROR] ❌ Failed to update topic:", error.message);
    return NextResponse.json(
      { error: "[ERROR] ❌ Failed to update topic" },
      { status: 500 }
    );
  }
};

export const GET = async (_, { params }) => {
  try {
    // Extracting values from request parameters
    const { id } = params;

    // Ensure a connection to MongoDB before retrieving the topic
    await connectMongoDB();

    // Retrieve the topic from the database
    const topic = await Topic.findById(id);

    // Respond with the topic and status code 200 (OK)
    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    // Handle errors and respond with an appropriate error message
    console.error("[ERROR] ❌ Failed to retrieve topic:", error.message);
    return NextResponse.json(
      { error: "[ERROR] ❌ Failed to retrieve topic" },
      { status: 500 }
    );
  }
};
