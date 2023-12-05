import { useState } from "react";
import AdminBookProfile from "./Admin-Book-Profile";

function BookCopies(props) {
  const { CopyID, Status, Author, ISBN } = props;
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
          key={index} // Add a unique key for each entry
          to={{
            pathname: `/BookFlow-Admin-bookProfile-${entry.CopyID}`,
            state: { entryData: entry }, // Pass entry data as state
          }}
          className="block hover:bg-[#392E05] hover:bg-opacity-20 rounded"
        ></Link>
      )}
    </div>
  );
}

export default BookCopies;
