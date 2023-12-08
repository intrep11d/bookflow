import { useState } from "react";
import { FaStar } from "react-icons/fa";

function bookCard(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="userHomePage-div flex h-screen w-screen">
      {/* <div className="sideNav bg-[url('./assets/newbg.jpg')] text-white flex flex-col items-center h-screen w-[4%]">
        <div className="profileIcon flex">
          <svg
            className="flex mt-[.3rem]"
            width="3.5rem"
            height="3.5rem"
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
        </div>

        <div className="middleIcons flex mt-[5rem] flex-col items-center">
          <div className="flex absolute w-[4rem] justify-center h-[15rem]">
            <div className="selectHover absolute  mt-[0.8rem] flex w-[3rem] h-[3rem] bg-[#755C40] rounded-lg hover:bg-opacity-20 bg-opacity-0 cursor-pointer z-10" />
            <div className="selectHover absolute  mt-[4.5rem] flex w-[3rem] h-[3rem] bg-[#755C40] rounded-lg hover:bg-opacity-20 bg-opacity-0 cursor-pointer z-10" />
            <div className="selectHover absolute  mt-[8rem] flex w-[3rem] h-[3rem] bg-[#755C40] rounded-lg hover:bg-opacity-20 bg-opacity-0 cursor-pointer z-10" />
            <div className="selectHover absolute  mt-[11.5rem] flex w-[3rem] h-[3rem] bg-[#755C40] rounded-lg hover:bg-opacity-20 bg-opacity-0 cursor-pointer z-10" />
          </div>
          <svg
            className="flex"
            width="5rem"
            height="5rem"
            viewBox="-1 0 58 58"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <defs>
                <filter
                  id="a"
                  width="200%"
                  height="200%"
                  x="-50%"
                  y="-50%"
                  filterUnits="objectBoundingBox"
                >
                  <feOffset
                    dy="1"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  />

                  <feGaussianBlur
                    stdDeviation="10"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  />

                  <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    in="shadowBlurOuter1"
                    result="shadowMatrixOuter1"
                  />

                  <feMerge>
                    <feMergeNode in="shadowMatrixOuter1" />

                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                fill-rule="evenodd"
                d="M33.001 35c.552 0 .999-.453.999-.997v-7.003h-12v7.003c0 .551.443.997.999.997h2.001v-6.003c0-.551.451-.997.991-.997h4.018c.547 0 .991.453.991.997v6.003h2.001zm-11.001-8h12l2 2v6.002c0 1.104-.895 1.998-1.994 1.998h-12.012c-1.101 0-1.994-.887-1.994-1.998v-6.002l2-2zm5 3h2v5h-2v-5zm.215-12.372c.433-.347 1.141-.343 1.569 0l8.431 6.745c.433.347.582 1.032.337 1.522l-.105.211c-.247.494-.8.62-1.23.286l-8.217-6.391-8.217 6.391c-.432.336-.985.204-1.23-.286l-.105-.211c-.247-.494-.091-1.179.337-1.522l8.431-6.745z"
                filter="url(#a)"
              />
            </g>
          </svg>

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
                d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>

          <svg
            className="mt-[1.5rem]"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 6.1519V19.3095C3.99197 18.8639 5.40415 18.4 7 18.4C8.58915 18.4 9.9999 18.8602 11 19.3094V6.1519C10.7827 6.02653 10.4894 5.8706 10.1366 5.71427C9.31147 5.34869 8.20352 5 7 5C5.26385 5 3.74016 5.72499 3 6.1519ZM13 6.1519V19.3578C13.9977 18.9353 15.41 18.5 17 18.5C18.596 18.5 20.0095 18.9383 21 19.3578V6.1519C20.2598 5.72499 18.7362 5 17 5C15.7965 5 14.6885 5.34869 13.8634 5.71427C13.5106 5.8706 13.2173 6.02653 13 6.1519ZM12 4.41985C11.7302 4.26422 11.3734 4.07477 10.9468 3.88572C9.96631 3.45131 8.57426 3 7 3C4.69187 3 2.76233 3.97065 1.92377 4.46427C1.30779 4.82687 1 5.47706 1 6.11223V20.0239C1 20.6482 1.36945 21.1206 1.79531 21.3588C2.21653 21.5943 2.78587 21.6568 3.30241 21.3855C4.12462 20.9535 5.48348 20.4 7 20.4C8.90549 20.4 10.5523 21.273 11.1848 21.6619C11.6757 21.9637 12.2968 21.9725 12.7959 21.6853C13.4311 21.32 15.0831 20.5 17 20.5C18.5413 20.5 19.9168 21.0305 20.7371 21.4366C21.6885 21.9075 23 21.2807 23 20.0593V6.11223C23 5.47706 22.6922 4.82687 22.0762 4.46427C21.2377 3.97065 19.3081 3 17 3C15.4257 3 14.0337 3.45131 13.0532 3.88572C12.6266 4.07477 12.2698 4.26422 12 4.41985Z"
                fill="#ffffff"
              />{" "}
            </g>
          </svg>

          <svg
            className="mt-[1.5rem]"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
            </g>
          </svg>
        </div>
      </div> */}

      <div className="mainContent flex h-[100%] w-[100%] flex-col">
        <div className="topNav flex w-[100%] h-[8%] border-purple-600 shadow-[-1rem_0.2rem_1rem_-1px_rgba(0,0,0,0.3)] ">
          <svg
            className="absolute ml-[2.5rem] mt-[1.2rem]"
            width="2rem"
            height="1.5rem"
            viewBox="0 -0.5 25 25"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.30524 15.7137C6.4404 14.8306 5.85381 13.7131 5.61824 12.4997C5.38072 11.2829 5.50269 10.0233 5.96924 8.87469C6.43181 7.73253 7.22153 6.75251 8.23924 6.05769C10.3041 4.64744 13.0224 4.64744 15.0872 6.05769C16.105 6.75251 16.8947 7.73253 17.3572 8.87469C17.8238 10.0233 17.9458 11.2829 17.7082 12.4997C17.4727 13.7131 16.8861 14.8306 16.0212 15.7137C14.8759 16.889 13.3044 17.5519 11.6632 17.5519C10.0221 17.5519 8.45059 16.889 7.30524 15.7137V15.7137Z"
                stroke="#999999"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />{" "}
              <path
                d="M11.6702 7.20292C11.2583 7.24656 10.9598 7.61586 11.0034 8.02777C11.0471 8.43968 11.4164 8.73821 11.8283 8.69457L11.6702 7.20292ZM13.5216 9.69213C13.6831 10.0736 14.1232 10.2519 14.5047 10.0904C14.8861 9.92892 15.0644 9.4888 14.9029 9.10736L13.5216 9.69213ZM16.6421 15.0869C16.349 14.7943 15.8741 14.7947 15.5815 15.0879C15.2888 15.381 15.2893 15.8559 15.5824 16.1485L16.6421 15.0869ZM18.9704 19.5305C19.2636 19.8232 19.7384 19.8228 20.0311 19.5296C20.3237 19.2364 20.3233 18.7616 20.0301 18.4689L18.9704 19.5305ZM11.8283 8.69457C12.5508 8.61801 13.2384 9.02306 13.5216 9.69213L14.9029 9.10736C14.3622 7.83005 13.0496 7.05676 11.6702 7.20292L11.8283 8.69457ZM15.5824 16.1485L18.9704 19.5305L20.0301 18.4689L16.6421 15.0869L15.5824 16.1485Z"
                fill="#999999"
              />{" "}
            </g>
          </svg>
          <input
            type="text"
            className="flex h-[2rem] w-[30rem] mt-[1rem] ml-[2rem] pl-[2.8rem] rounded-[10rem] bg-[#755D41] bg-opacity-20"
            placeholder="Search your favorite books, author, genre"
          />
        </div>
        <div className="middleContent flex h-[100%] w-[100%] justify-evenly">
          <div className="bookImage w-[35rem]  flex flex-col justify-center items-center ">
            <svg
              className="absolute flex mb-[5rem] z-10"
              fill="#755D41"
              width="80rem"
              height="20rem"
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
              src={atomicImage}
              alt=""
              className="w-[15rem] h-[22rem] shadow-[-1rem_1rem_1rem_-1px_rgba(0,0,0,0.3)] z-20"
            />
            <button className="hover:cursor-pointer hover:text-[#392E05] hover:bg-[#B8A48E] rounded-[5rem] text-white h-[3rem] w-[14rem] mt-[3rem] bg-[#755D41]">
              borrow
            </button>
          </div>
          <div className="bookInfo flex w-[50%]  lg:pt-[5rem] flex-col">
            <h1 className="title text-[3rem] font-bold">Atomic Habits</h1>{" "}
            {/*props.title*/}
            <div className="author flex ">
              <p className="mr-[0.2rem]">by</p>
              <p className="font-bold">James Clear</p> {/*props.title*/}
            </div>
            <p className="flex mt-[1.5rem] text-[1.5rem]">
              {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                  <label
                    key={index}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  >
                    <input
                      className="cursor-pointer hidden"
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                    />
                    <FaStar
                      className="star cursor-pointer"
                      size={20}
                      color={
                        currentRating <= (hover || rating)
                          ? "#ffc110"
                          : "#392E05"
                      }
                    />
                  </label>
                );
              })}
            </p>
            <p className="synopsis mt-[2rem] lg:text-[1.2rem] text-[1rem] w-[80%]">
              Atomic Habits by James Clear is a comprehensive, practical guide
              on how to change your habits and get 1% better every day. Using a
              framework called the Four Laws of Behavior Change, Atomic Habits
              teaches readers a simple set of rules for creating good habits and
              breaking bad ones.
            </p>
            <div className="extraInfo flex border-t border-[#392E05] border-opacity-40 mt-[2rem] w-[80%]">
              <div className="flex flex-col mt-[2rem] text-[1.2rem]">
                <h1 className="mb-[1rem] font-bold">Editors</h1>
                <h1 className="mb-[1rem] font-bold">ISBN</h1>
                <h1 className="mb-[1rem] font-bold">Language</h1>
                <h1 className="mb-[1rem] font-bold">Pages</h1>
              </div>

              <div className="flex flex-col mt-[2rem] ml-[25%] text-[1.2rem]">
                <h1 className="mb-[1rem]">James Clear</h1> {/*props.editors*/}
                <h1 className="mb-[1rem]">978-0735211292</h1> {/*props.ISBN*/}
                <h1 className="mb-[1rem]">English</h1> {/*props.Language*/}
                <h1 className="mb-[1rem]">320</h1> {/*props.Pages*/}
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default bookCard;
