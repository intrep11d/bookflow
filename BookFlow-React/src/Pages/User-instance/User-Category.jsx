import userImage from "./image.png";

function UserCategory() {
  return (
    <div className="userHomePage-div flex h-screen w-screen">
      <div className="mainContent flex h-screen w-[100%] flex-col bg-[#F1E7DD]">
        <div className="topNav flex w-[100%] h-[5rem] justify-between shadow-md bg-[url('./assets/newbg.jpg')] bg-opacity-80 pl-[1rem] pr-[1rem]">
          <div className="flex items-center">
            <svg
              className="flex ml-[2rem] mt-[0rem]"
              width="4rem"
              height="3.6rem"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  fill="#D9D9D9"
                />{" "}
              </g>
            </svg>

            <div className="flex text-[1.5rem]">
              <h1 className="text-white">BookFlow</h1>
            </div>
          </div>

          <div className="topContents flex items-center justify-evenly text-white w-[40rem] text-[1.3rem]">
            <div className="flex">
              <h1>Home</h1>
            </div>
            <div className="flex">
              <h1>Category</h1>
            </div>
            <div className="flex">
              <h1>More</h1>
              <div className="profileArrow flex ">
                <svg
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                      d="M7 10L12 15L17 10"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div className="topRightContents flex border-red-600 w-auto items-center mr-[1.5rem]">
            <div className="profileIconBorder flex w-[5.5rem] justify-center rounded-3xl h-[3rem] items-center bg-[#755D41]">
              <img
                src={userImage}
                className="profileIcon flex w-[2.3rem] h-[2.3rem] mr-[0.5rem] rounded-3xl"
              />
              <div className="profileArrow flex ">
                <svg
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                      d="M7 10L12 15L17 10"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCategory;
