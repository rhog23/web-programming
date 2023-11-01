import EditTopicForm from "@/components/EditTopicForm";
import React from "react";
import { NextResponse } from "next/server";

const getTopicById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/topics/${id}`,
      { cache: "no-cache" }
    );
    if (!res.ok) {
      throw new Error("[ERROR] ❌ Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.error("[ERROR] ❌ Failed to retrieve topic", error);
    return NextResponse.json(
      {
        message: "[ERROR] ❌ Failed to retrieve topic",
      },
      { status: 500 }
    );
  }
};

const EditTopic = async ({ params }) => {
  const { id } = params;

  const {
    topic: { title, description },
  } = await getTopicById(id);

  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
