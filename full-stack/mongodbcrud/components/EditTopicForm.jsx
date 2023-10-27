import React from "react";

const EditTopicForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        name=""
        className="border border-zinc-300 px-8 py-2"
        placeholder={"Topic's Title"}
      />
      <input
        type="text"
        name=""
        className="border border-zinc-300 px-8 py-2"
        placeholder={"Topic's Description"}
      />
      <button className="bg-amber-300 rounded-sm font-semibold w-fit px-6 py-3">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
