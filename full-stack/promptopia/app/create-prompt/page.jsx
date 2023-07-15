"use client";

import { useState } from "react";
import { useSession } from "next-auth/react"; // aloow us to know which user is logged in
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const CreatePrompt = () => {
  // state to determine whether we are submitting the form
  const [submitting, setSubmitting] = useState(false);

  // state to track post/form input
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {};
  return (
    <div>
      <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </div>
  );
};

export default CreatePrompt;
