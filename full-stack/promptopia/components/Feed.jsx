"use client";

import { useState, useEffect } from "react";

import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts((prevPosts) => [...prevPosts, data]);
    };

    fetchPosts();
  }, []);

  const filteredPosts = (text) => {
    const regex = new RegExp(text, "i"); // the 'i' flag stands for case-insensitive search
    const [allPosts] = posts;
    return [
      allPosts.filter(
        (item) =>
          regex.test(item.creator.username) ||
          regex.test(item.tag) ||
          regex.test(item.prompt)
      ),
    ];
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    /* [IMPORTANT] Debouncing is a programming pattern or a technique to restrict the calling of a time-consuming function frequently, by delaying the execution of the function until a specified time to avoid unnecessary CPU cycles, and API calls and improve performance. */
    setSearchTimeout(
      setTimeout(() => {
        const results = filteredPosts(e.target.value);
        setSearchResults(results);
      }, 500)
    );
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);

    const results = filteredPosts(tag);
    setSearchResults(results);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* Switch between all posts and filtered posts */}
      {searchText ? (
        <PromptCardList data={searchResults} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
