import { useState } from "react";

function BookRec(props) {
  const { image, author, title} = props;
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative recCardContainer" style={{ height: "13rem" }}>
      <div
        className="recCards flex w-[100%] items-center h-[100%] relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={image}
          alt=""
          className={`w-[6rem] h-[8.6rem] shadow-[0.6em_0.7rem_0.7rem_-1px_rgba(0,0,0,0.3)] hover:cursor-pointer transition-all ${
            hovered ? "w-[7rem] h-[9.6rem]" : ""
          }`}
        />

        <div className="flex font-bold flex-col ml-[1.1rem] h-[10rem] w-[9rem]">
          <h1 className="text-[#3D3D3D] text-[1rem] mt-[1rem] font-bold">
            {title}
          </h1>
          <h1 className="text-[#828282] text-[0.695rem] mt-[0.5rem]">
            {author}
          </h1>
          {/* {isNew && (
            <span className="flex top-[5.6rem] right-[12.5rem] mt-2 mr-[0rem] rounded-xl bg-[#076527] text-white w-[3rem] h-[1.2rem] items-center justify-center text-sm">
              <h1 className="font-bold">New</h1>
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default BookRec;
