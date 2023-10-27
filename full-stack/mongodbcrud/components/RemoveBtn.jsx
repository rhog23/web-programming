import React from "react";
import { CiTrash } from "react-icons/ci";

const RemoveBtn = () => {
  return (
    <button>
      <CiTrash width={24} className="text-rose-700" />
    </button>
  );
};

export default RemoveBtn;
