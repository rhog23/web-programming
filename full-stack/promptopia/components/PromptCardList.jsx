import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  const [posts] = data;
  return (
    <div className="mt-16 prompt_layout">
      {posts?.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
