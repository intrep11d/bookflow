import { useState } from "react";

function userStaff() {
  const [color, setColor] = useState("#000000");
  const [color2, setColor2] = useState("#000000");

  const handleMouseEnter = () => {
    setColor("#D5C5AE");
  };

  const handleMouseLeave = () => {
    setColor("#000000");
  };

  const handleMouseEnter2 = () => {
    setColor2("#D5C5AE");
  };

  const handleMouseLeave2 = () => {
    setColor2("#000000");
  };

  return (
    <div className="mainDiv flex h-screen w-screen items-center flex-col bg-black">
      <div
        className="bgPic absolute h-screen w-screen bg-[url('./assets/book-bg.jpg')] bg-cover bg-center opacity-10"
        style={{ pointerEvents: "none" }}
      />
      <div className="navUsBar flex justify-between w-[100%]">
        <h1 className="flex pt-[1rem] pl-[4rem] text-white">LOGO BookFlow</h1>
      </div>

      <div
        className="mainCard-Div flex w-[50%] justify-center mt-[15%] max-[900px]:mt-[40%] max-[600px]:mt-[50%]"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          className="userCard-Div flex bg-[#D5C5AE] hover:cursor-pointer rounded-lg bg-opacity-50 mr-[5rem] flex-col items-center h-[13rem] w-[12rem] hover:bg-transparent hover:text-[#D5C5AE] hover:border-[#D5C5AE] hover:border-[0.3rem]"
          style={{ position: "relative", zIndex: 2, transition: "color 0.10s" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            width="8rem"
            height="10rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke={color}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>

          <h1 className="flex pb-[0.5rem] text-[2rem]">user</h1>
        </div>

        <div
          className="groupCard-Div flex bg-[#D5C5AE] rounded-lg hover:text-[#D5C5AE] hover:cursor-pointer bg-opacity-50 h-[13rem] w-[12rem] justify-center items-center flex-col hover:bg-transparent hover:border-[0.3rem] hover:border-[#D5C5AE]"
          style={{ position: "relative", zIndex: 2, transition: "color 0.10s" }}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <svg
            width="8rem"
            height="10rem"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="3"
            stroke={color2}
            fill="none"
          >
            <circle cx="31.89" cy="22.71" r="5.57" />
            <path d="M43.16,43.74A11.28,11.28,0,0,0,31.89,32.47h0A11.27,11.27,0,0,0,20.62,43.74Z" />
            <circle cx="48.46" cy="22.71" r="5.57" />
            <path d="M46.87,43.74H59.73A11.27,11.27,0,0,0,48.46,32.47h0a11.24,11.24,0,0,0-5.29,1.32" />
            <circle cx="15.54" cy="22.71" r="5.57" />
            <path d="M17.13,43.74H4.27A11.27,11.27,0,0,1,15.54,32.47h0a11.24,11.24,0,0,1,5.29,1.32" />
          </svg>
          <h1 className="flex pb-[0.5rem] text-[2rem]">staff</h1>
        </div>
      </div>
    </div>
  );
}

export default userStaff;
