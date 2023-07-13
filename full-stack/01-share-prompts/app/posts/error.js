/* "use client"; // Error components must be clinet components
import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment; bringing back the user to the previous location
          () => reset()
        }
      >
        Try Again
      </button>
    </div>
  );
};

export default Error; */
