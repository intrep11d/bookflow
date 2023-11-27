import userImage from "./image.png";
import BookPanel from "../../Components/BookPanel";
import { useState } from "react";
import { useEffect } from "react";
import './User-Home-Style.css';

function UserCategory() {
  const [bookPanelCount, setBookPanelCount] = useState(null);

  //  check the screen size and set the bookPanelCount
  const handleWindowSize = () => {
    const isSmallMonitor = window.innerWidth < 1920;
    setBookPanelCount(isSmallMonitor ? 4 : 5);
  };

  // useEffect to add event listener and handle initial window size
  useEffect(() => {
    handleWindowSize(); // Set the initial bookPanelCount based on window size
    window.addEventListener("resize", handleWindowSize); // Check for window resize
    return () => {
      window.removeEventListener("resize", handleWindowSize); // Cleanup the event listener
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Create an array of BookPanel components based on bookPanelCount
  const bookPanelsArray = Array.from(
    { length: bookPanelCount || 0 },
    (_, index) => <BookPanel key={index} />
  );

  return (
    <div className="overflow-x-hidden">
    <div className="userHomePage-div flex h-screen w-screen">
      <div className="mainContent flex h-[100%] w-[100%] flex-col">
        <div className="topNav flex w-[100%] h-[4rem] justify-between shadow-xl bg-[url('./assets/newbg.jpg')] bg-opacity-80">
          <div className="flex items-center">
            <svg
              className="flex ml-[2rem] mt-[0rem]"
              width="4rem"
              height="2.5rem"
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
              <h1 className="text-white font-bold">BookFlow</h1>
            </div>
          </div>

          <div className="topContents ml-[2rem] flex items-center justify-evenly text-white w-[40rem] text-[1.3rem]">
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

          <div className="topRightContents flex w-auto items-center mr-[1.5rem]">
            <div className="bellSearch flex">
              <svg
                className="mr-[0.5rem]"
                height="2rem"
                width="1.5rem"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
                fill="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <style type="text/css"></style>{" "}
                  <g>
                    {" "}
                    <path
                      class="st0"
                      d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466 c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536 c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0 S344.045,229.174,286.694,286.536z"
                    />{" "}
                    <path
                      class="st0"
                      d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182 c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154 C108.227,109.193,104.125,109.695,101.911,112.531z"
                    />{" "}
                    <path
                      class="st0"
                      d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033 c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964 C516.216,483.951,515.857,462.068,498.544,447.722z"
                    />{" "}
                  </g>{" "}
                </g>
              </svg>

              <svg
                className="mr-[2rem]"
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
                    d="M20.53 16.25C20.44 16.25 18.42 15.89 18.42 10C18.42 5.84 16 3.25 12 3.25C8 3.25 5.58 5.84 5.58 10C5.58 16 3.49 16.25 3.5 16.25C3.30109 16.25 3.11032 16.329 2.96967 16.4697C2.82902 16.6103 2.75 16.8011 2.75 17C2.75 17.1989 2.82902 17.3897 2.96967 17.5303C3.11032 17.671 3.30109 17.75 3.5 17.75H8.33C8.49694 18.6007 8.95423 19.367 9.62366 19.9178C10.2931 20.4686 11.1331 20.7698 12 20.7698C12.8669 20.7698 13.7069 20.4686 14.3763 19.9178C15.0458 19.367 15.5031 18.6007 15.67 17.75H20.51C20.7089 17.75 20.8997 17.671 21.0403 17.5303C21.181 17.3897 21.26 17.1989 21.26 17C21.26 16.8011 21.181 16.6103 21.0403 16.4697C20.8997 16.329 20.7089 16.25 20.51 16.25H20.53ZM12 19.25C11.5363 19.2491 11.0843 19.1044 10.7064 18.8357C10.3284 18.567 10.0432 18.1877 9.89 17.75H14.11C13.9568 18.1877 13.6716 18.567 13.2936 18.8357C12.9157 19.1044 12.4637 19.2491 12 19.25ZM5.76 16.25C6.48 15.16 7.08 13.25 7.08 10C7.08 6.75 8.88 4.75 12 4.75C15.12 4.75 16.92 6.66 16.92 10C16.92 13.34 17.52 15.16 18.24 16.25H5.76Z"
                    fill="#ffffff"
                  />{" "}
                </g>
              </svg>
            </div>

            <div className="profileIconBorder flex w-[5.5rem] justify-center rounded-3xl h-[2.4rem] items-center bg-[#755D41]">
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

        <div className="middleContentDiv flex flex-col h-[96vh] w-screen pr-[5rem] pl-[5rem] pt-[1.5rem]">
          <div
            className="bannerDiv h-[14rem] w-[100%] rounded-2xl bg-[url('./assets/stack-book.jpg')] bg-cover"
            style={{ backgroundPosition: "50% 27%" }}
          >
            <div className="bannerGradient h-[100%] rounded-2xl w-[100%] bg-black bg-opacity-50"></div>

            <div className="newRelease flex flex-col border-red-600 w-[100%] h-[15rem] mt-[2.5rem]">
              <div className="flex justify-between w-[100%] items-center">
                <h1 className="font-bold text-[1.5rem]">New Releases</h1>
                <h1>View All</h1>
              </div>

              <div className="bookPanelDiv flex h-[100%] w-[100%] mt-[1rem] justify-between">
                {bookPanelsArray.map((panel, index) => (
                  <div key={index}>{panel}</div>
                ))}
              </div>
            </div>

            <div className="bottomHalf flex border border-blue-700 w-[100%] h-[30rem]">
              <div className="forYou grid border border-red-600 w-[60%] h-[20rem]">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UserCategory;
