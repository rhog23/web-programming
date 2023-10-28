import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

const TopicItem = ({ topic }) => {
  return (
    <div
      key={topic._id}
      className="p-4 border border-zinc-300 my-3 flex justify-between gap-5 items-start"
    >
      <div>
        <h2 className="font-bold text-2xl">{topic.title}</h2>
        <div>{topic.description}</div>
      </div>
      <div className="flex gap-5">
        <RemoveBtn id={topic._id} />
        <Link href={`/edit-topic/${topic._id}`}>
          <CiEdit size={24} className="text-amber-700" />
        </Link>
      </div>
    </div>
  );
};

export default TopicItem;
