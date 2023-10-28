"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddTopic = () => {
  // Use the useRouter hook to get the router object
  const router = useRouter();

  // Use the useState hook to manage state for title and description
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior (which is reload the page after submit)
    e.preventDefault();

    // Check if title or description is empty
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      // Send a POST request to the "/api/topics/" endpoint
      const res = await fetch("/api/topics/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("[ERROR] ❌ Failed to add topic.", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className="border border-zinc-300 px-8 py-2"
        type="text"
        placeholder={"Topic's Title"}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <input
        className="border border-zinc-300 px-8 py-2"
        type="text"
        placeholder={"Topic's Description"}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button
        type="submit"
        className="bg-green-300 font-semibold py-3 px-6 w-fit rounded-sm"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
