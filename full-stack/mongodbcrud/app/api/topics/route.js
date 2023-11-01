import connectMongoDB from "@/libs/mongodb"; 
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { title, description } = await req.json();

    // Ensure a connection to MongoDB before creating a topic
    await connectMongoDB();

    // Create a new topic using the Topic model
    await Topic.create({
      title,
      description,
    });

    // Respond with a success message and status code 201 (Created)
    return NextResponse.json(
      { message: "[INFO] ✅ Topic Created" },
      { status: 201 }
    );
  } catch (error) {
    // Handle errors and respond with an appropriate error message
    console.error("[ERROR] ❌ Failed to create topic:", error.message);
    return NextResponse.json(
      { error: "[ERROR] ❌ Failed to create topic" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    // Ensure a connection to MongoDB before retrieving topics
    await connectMongoDB();

    // Retrieve topics from the database
    const topics = await Topic.find();

    // Respond with the topics and status code 200 (OK)
    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    // Handle errors and respond with an appropriate error message
    console.error("[ERROR] ❌ Failed to retrieve topics:", error.message);
    return NextResponse.json(
      { error: "[ERROR] ❌ Failed to retrieve topics" },
      { status: 500 }
    );
  }
};

export const DELETE = async (req) => { 
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();

  await Topic.findByIdAndDelete(id);

  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
};
