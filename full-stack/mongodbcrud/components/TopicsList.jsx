"use client";

import React, { useEffect, useState } from "react";
import TopicItem from "./TopicItem";

// Function to fetch topics from the API
const fetchTopics = async () => {
  try {
    // Using relative URL for flexibility
    const res = await fetch("/api/topics", { cache: "no-cache" });
    return res.json();
  } catch (error) {
    console.error("[ERROR] ❌ Failed to fetch topics");
    throw error;
  }
};

// Component to render the list of topics
const TopicsList = () => {
  // State to manage topics, loading state, and error state
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data when the component mounts
    const fetchData = async () => {
      try {
        // Fetch topics and update state
        const { topics } = await fetchTopics();
        setTopics(topics);
        setLoading(false);
      } catch (error) {
        // Handle errors and update state
        setError(error.message);
        setLoading(false);
      }
    };

    // Invoke the fetch function
    fetchData();
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  // Render loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render the list of topics
  return (
    <React.Fragment>
      {topics.map((topic) => (
        <TopicItem key={topic._id} topic={topic} />
      ))}
    </React.Fragment>
  );
};

export default TopicsList;
