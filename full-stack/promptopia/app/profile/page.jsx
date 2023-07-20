"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  /* fetching data from db */
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts((prev) => [...prev, data]);
    };

    if (session?.user.id) {
      fetchPosts();
    }
  }, [session]);
  const handleEdit = (post) => {
    /* redirect user to the edit page */
    router.push(`update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {};
  return (
    <Profile
      name={session?.user.id ? `${session?.user.name}'s` : "My"}
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
