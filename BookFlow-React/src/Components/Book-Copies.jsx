import { useState } from "react";
import AdminBookProfile from "./Admin-Book-Profile";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BookCopies(props) {
  const { CopyID, Status, Author, ISBN, index } = props;
  const [copyClick, setCopyClick] = useState(false);

  const handleClick = () => {
    setCopyClick(true);
  };

  return (
    <div
      className="listEntry flex justify-between mb-[1rem]"
      onClick={handleClick}
    >
      <h1>{CopyID}</h1>
      {Status === "available" && (
        <div className="w-[10rem] flex justify-center bg-green-800 text-white rounded-xl items-center">
          <h1>{Status}</h1>
        </div>
      )}

      {Status === "unavailable" && (
        <div className="w-[10rem] flex justify-center bg-yellow-800 text-white rounded-xl">
          <h1>{Status}</h1>
        </div>
      )}

      {Status === "borrowed" && (
        <div className="w-[10rem] flex justify-center bg-blue-700 text-white rounded-xl">
          <h1>{Status}</h1>
        </div>
      )}

      {Status === "lost" && (
        <div className="w-[10rem] flex justify-center bg-red-900 text-white rounded-xl">
          <h1>{Status}</h1>
        </div>
      )}

      {copyClick === true && (
        <Link
          to={{
            pathname: `/BookFlow-Admin-bookProfile-${CopyID}`, // Use CopyID or any unique identifier
            state: { bookData: props }, // Pass book data to the new page
          }}
          className="block hover:bg-[#392E05] hover:bg-opacity-20 rounded"
        >
          View Details
        </Link>
      )}
    </div>
  );
}

export default BookCopies;
