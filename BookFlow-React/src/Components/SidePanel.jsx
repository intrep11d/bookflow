import laws from "./48laws.jpg";
import { useState } from "react";

function SidePanel(props) {
  const { bookID, Title } = props;
  const [color, setColor] = useState("none");

  const handleColor = () => {
    setColor("#7B2D2D")
  }

  const removeColor = () => {
    setColor("none");
  }

  return (
    <div className=" flex relative bg-[#755D41] bg-opacity-20 items-center  flex-col w-[36%] h-[100vh] p-[2rem] shadow-[-0.5rem_0rem_1rem_0px_rgba(0,0,0,0.3)] overflow-y-auto">
      <div className="bookImage w-[100%]  flex flex-col items-center h-[40%] border-black justify-center">
        <svg
          className="absolute flex mb-[5rem] z-10"
          fill="#755D41"
          width="18rem"
          height="15rem"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#755D41"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle cx="16" cy="16" r="16" />{" "}
          </g>
        </svg>
        <img
          src={laws}
          alt=""
          className="w-[10rem] rounded-xl h-[15rem] shadow-[-1rem_1rem_1rem_-1px_rgba(0,0,0,0.3)] z-20"
        />
        <div className="flex w-[15rem] mt-[2rem] items-center border-black justify-between h-[3rem]">
        <button className="hover:cursor-pointer hover:text-[#392E05] hover:bg-[#B8A48E] rounded-[5rem] text-white h-[2rem] w-[12rem] bg-[#755D41]">
          borrow
        </button>
        <svg
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
              fill={color}
              xmlns="http://www.w3.org/2000/svg"
              className="hover:cursor-pointer"
              onClick={() => {
                if (color === "#7B2D2D") {
                  removeColor(); // Remove the color if it's red
                } else {
                  handleColor(); // Set the color if it's not red
                }
              }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            </div>
      </div>

      <div className="border-b border-[#9e9574] text-black pb-[1rem] border-opacity-100 h-[10rem] mt-[2rem] w-[65%] flex justify-center items-end">
        Book details
      </div>

      <div className=" border-black font-semibold flex-col h-[100%] w-[100%] items-center p-[2rem] flex">
        <div className="text-[1.8rem]">Atomic Habits</div>
        <div className="text-[1rem]">James Clear</div>
        <div className="flex-wrap text-center items-center justify-center w-[20rem] mt-[2rem] text-[1.2rem]">
        Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones.
        </div>

        <div className="flex flex-col w-[100%] items-center mt-[5rem] h-[15rem]">
            <div className="flex justify-between   border-black items-center w-[15rem]">
                <div className="font-bold">Editors</div>
                <div className="">James Clear</div>
            </div>
            <div className="flex justify-between mt-[1rem]  border-black items-center w-[15rem]">
                <div className="font-bold">ISBN</div>
                <div className="">978-129389123</div>
            </div>            
            <div className="flex justify-between  mt-[1rem] border-black items-center w-[15rem]">
                <div className="font-bold">Language</div>
                <div className="">Afrikaans</div>
            </div>            
            <div className="flex justify-between  mt-[1rem] border-black items-center w-[15rem]">
                <div className="font-bold">Pages</div>
                <div className="">242</div>
            </div>
        </div>


      </div>
    </div>
  );
}

export default SidePanel;
