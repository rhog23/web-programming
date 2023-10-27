import React from "react";

const AddTopic = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-zinc-300 px-8 py-2"
        type="text"
        name=""
        placeholder={"Topic's Title"}
      />

      <input
        className="border border-zinc-300 px-8 py-2"
        type="text"
        name=""
        placeholder={"Topic's Description"}
      />

      <button className="bg-green-300 font-semibold py-3 px-6 w-fit rounded-sm">
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
