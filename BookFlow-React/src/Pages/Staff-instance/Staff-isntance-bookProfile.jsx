import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import SearchBar from "../../Components/SearchBar";

const StaffBookProfile = (props) => {
  const { BookID, Title, Author, Genre, ISBN, Status, Copies } = props;

  return (
    <div>
      <div className="overflow-x-hidden">
        <div className="userHomePage-div flex h-screen w-screen">
          <div className="mainContent flex h-[170%] w-[100%] flex-col">
            <div className="topNav flex w-[100%] h-[4rem] justify-between shadow-xl bg-[url('./assets/newbg.jpg')] bg-opacity-80">
              <div className="flex items-center">
                <svg
                  className="flex ml-[0rem] mt-[0rem]"
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

              <div className="topContents ml-[-4rem] flex items-center justify-center text-white w-[40rem] text-[1.3rem]">
                <div className="flex">
                  <a href="/BookFlow-Admin-Usertable" className="mr-[2.5rem]">
                    Accounts
                  </a>
                  <a href="#" className="mr-[2.5rem]">
                    Books
                  </a>
                </div>
              </div>

              <div className="topRightContents flex w-auto items-center mr-[1.5rem]">
                <div className="profileIconBorder flex w-[5.5rem] justify-center rounded-3xl h-[2.4rem] items-center bg-[#755D41]">
                  <img
                    src="#"
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

            <div className="middleContentDiv border-blue-700 p-[2rem] flex flex-col h-[85%] w-screen">
              <div className="userProfile w-[100%] h-[50%] mb-[3rem]">
                <div className="UserProfile flex items-center w-[100%] mb-[1rem]">
                  <Link to="/BookFlow-Staff-booktable">
                    <svg
                      className="hover:cursor-pointer"
                      width="2rem"
                      height="2rem"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12H20M4 12L8 8M4 12L8 16"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </Link>
                  <h1 className="mr-[1rem] ml-[1rem] text-[1.2rem] font-bold">
                    Copy Profile
                  </h1>
                  <div className="w-[85%] border-[#392E05] border-opacity-40 border" />
                </div>

                <div className="flex border rounded-xl bg-[#392E05] bg-opacity-20 p-[2rem] w-[100%] h-[80%] mb-[1rem]">
                  <div className="bookPic border-r border-[#392E05] border-opacity-40 w-[30%] flex justify-center items-center">
                    <img
                      src=""
                      alt=""
                      className="border border-black w-[11rem] h-[90%] mr-[1rem]"
                    />
                    <div className="flex flex-col items-center h-[12rem] justify-center w-[10rem]">
                      <h1 className="mb-[1.5rem] font-bold">Book title</h1>
                      <button className="bg-[#2D7B3E] rounded-xl text-white w-[8rem] h-[1.7rem] mb-[1rem]">
                        Available
                      </button>
                        <button className="flex border items-center justify-between pl-[1rem] pr-[1rem] rounded-xl border-black w-[8rem] h-[1.7rem] mb-[1rem]">
                          <h1>edit</h1>
                          <svg
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                              fill="#000000"
                            />
                          </svg>
                        </button>
                        <button className="flex border items-center pl-[1rem] pr-[1rem] rounded-xl border-black w-[8rem] h-[1.7rem] mb-[1rem]">
                          <h1>borrow</h1>
                        </button>
                    </div>
                  </div>
                  <div className="information flex flex-col border-r pl-[3rem] pr-[3rem] border-[#392E05] border-opacity-40 w-[30%]">
                    <h1 className="text-[1.5rem] font-bold">Information</h1>
                    <div className="flex w-[100%] justify-between pt-[1rem]">
                      <h1>Title</h1>
                      <h1 className="font-bold">{Title}</h1>
                    </div>
                    <div className="flex w-[100%] justify-between pt-[1rem]">
                      <h1>Author</h1>
                      <h1 className="font-bold">{Author}</h1>
                    </div>
                    <div className="flex w-[100%] justify-between pt-[1rem]">
                      <h1>Publication Date</h1>
                      <h1 className="font-bold">{Date}</h1>
                    </div>
                    <div className="flex w-[100%] justify-between pt-[1rem]">
                      <h1>ISBN</h1>
                      <h1 className="font-bold">9328492839423</h1>
                    </div>
                    <div className="flex w-[100%] justify-between pt-[1rem]">
                      <h1>Edition</h1>
                      <h1 className="font-bold">Home</h1>
                    </div>
                    <div className="flex w-[100%] justify-between pt-[1rem]">
                      <h1>Format</h1>
                      <h1 className="font-bold">Date</h1>
                    </div>
                  </div>
                  <div className="data w-[40%] pl-[3rem] pr-[3rem]">
                    <h1 className="text-[1.5rem] font-bold">Synopsis</h1>
                    <div className="flex w-[100%] justify-between pt-[1rem]">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Harum cumque iure, maiores, quasi, ipsum sapiente magnam
                      incidunt eveniet sint nostrum aspernatur? Molestiae dicta
                      porro unde officia dolor odio doloremque eaque?
                    </div>
                  </div>
                </div>

                <div className="UserProfile flex items-center w-[100%]">
                  <h1 className="mr-[1rem] ml-[1rem] text-[1.2rem] font-bold">
                    History
                  </h1>
                  <div className="w-[88%] border-[#392E05] border border-opacity-40" />
                </div>
              </div>
                
                <SearchBar></SearchBar>


              <div className="tableDiv bg-[#392E05] p-[2rem] bg-opacity-20 rounded-t-xl mt-[2rem] w-[100%] h-[100%] border-black">
                <div className="tableTab flex w-[100%]items-center border-[#392E05]  border-opacity-40 justify-between">
                  <div className="flex w-[20rem] border-black justify-center items-center h-[100%]"></div>
                </div>

                <div className="tableContent flex flex-col border-red-600 h-[100%] w-[100%] overflow-y-auto overflow-x-hidden">
                  <div className="font-bold tableContentID justify-around text-[1rem] flex bg-[#392E05] bg-opacity-20 h-[2.5rem] items-center w-[100%] border-[#392E05] rounded-md border">
                    <h1>Borrow ID</h1>
                    <h1>User</h1>
                    <h1 className="ml-[6rem]">Date Borrowed</h1>
                    <h1 className="">Overdue Date</h1>
                    <h1>Date Returned</h1>
                    <h1>Status</h1>
                  </div>

                  <div className="border-blue-700 h-[100%] w-[100%] mt-[1rem] overflow-y-auto overflow-x-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffBookProfile;
