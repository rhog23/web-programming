"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior (which is reload the page after submit)
    e.preventDefault();

    // Check if title or description is empty
    if (!newTitle || !newDescription) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("[ERROR] ❌ Failed to update topic.", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        name=""
        className="border border-zinc-300 px-8 py-2"
        placeholder={"Topic's Title"}
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <input
        type="text"
        name=""
        className="border border-zinc-300 px-8 py-2"
        placeholder={"Topic's Description"}
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      />
      <button className="bg-amber-300 rounded-sm font-semibold w-fit px-6 py-3">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
