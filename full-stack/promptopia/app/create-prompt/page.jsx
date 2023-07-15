"use client";

import { useState } from "react";
import { useSession } from "next-auth/react"; // aloow us to know which user is logged in
import { useRouter } from "next/navigation";

import Form from "@/components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  // state to determine whether we are submitting the form
  const [submitting, setSubmitting] = useState(false);

  // state to track post/form input
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault(); // preventing the default behavior of the submit (which is reload)
    setSubmitting((prevSubmitting) => {
      prevSubmitting = !prevSubmitting;
    });

    try {
      // API
      // we are passing the data, which is in the body props into the API endpoint using a POST request
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting((prevSubmitting) => {
        prevSubmitting = !prevSubmitting;
      });
    }
  };
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
