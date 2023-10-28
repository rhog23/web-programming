import React from "react";
import { CiTrash } from "react-icons/ci";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const deleteTopic = async () => {
    const confirmed = window.confirm(
      "⚠️ Do you want to delete this topic? (Not reversible) ⚠️"
    );

    if (confirmed) {
      try {
        // Send a DELETE request to the "/api/topics/" endpoint
        const res = await fetch(`/api/topics?id=${id}`, {
          method: "DELETE",
        });

        // Check if the request was successful
        if (res.ok) {
          router.refresh();
        } else {
          console.error("[ERROR] ❌ Failed to delete topic.");
        }
      } catch (error) {
        console.error("[ERROR] ❌ Failed to delete topic.", error);
      }
    }
  };
  return (
    <button>
      <CiTrash width={24} className="text-rose-700" onClick={deleteTopic} />
    </button>
  );
};

export default RemoveBtn;
