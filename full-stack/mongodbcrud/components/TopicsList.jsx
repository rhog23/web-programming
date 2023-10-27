import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

const TopicsList = () => {
  return (
    <React.Fragment>
      <div className="p-4 border border-zinc-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-5">
          <RemoveBtn />
          <Link href={"/edit-topic/123"}>
            <CiEdit size={24} className="text-amber-700" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopicsList;
