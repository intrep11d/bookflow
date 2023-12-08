import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import SearchBar from "../../Components/SearchBar";
import Select from 'react-select'

const StaffBookProfile = (props) => {
  const { BookID, Title, Author, Genre, ISBN, Status, Copies } = props;
  const [clickEdit, setClickEdit] = useState(false);
  const [color, setColor] = useState("#000000");
  const [clickBorrow, setClickBorrow] = useState(false);

  const handleClickEdit = () => {
    setClickEdit(true);
  };

  const handleClickEditClose = () => {
    setClickEdit(false);
  };

  const handleClickBorrow = () => {
    setClickBorrow(true);
  }

  const handleClickBorrowClose = () => {
    setClickBorrow(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const colorChange = () => {
    setColor("#ffffff");
  };

  const colorChangeLeave = () => {
    setColor("#000000");
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "rgba(57, 46, 5, 0.2)",
      borderColor: "#392E05",
      width: "21rem", // Set width as needed
      borderRadius: "0.8rem",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "rgba(57, 46, 5, 0.2)",
    }),
  };

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
              <div className="flex items-center">
                <a
                  href="/BookFlow-Staff-booktable"
                  className="mr-[2.5rem] w-[7rem] items-center h-[3rem] flex justify-center hover:bg-[#dac98d] hover:bg-opacity-20 rounded-xl"
                >
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
                      <button
                        onClick={handleClickEdit}
                        onMouseEnter={colorChange}
                        onMouseLeave={colorChangeLeave}
                        className="flex border items-center justify-between pl-[1rem] pr-[1rem] rounded-xl border-[#392E05] w-[8rem] h-[1.7rem] mb-[1rem] hover:bg-[#755C40] hover:text-white transition-all duration-75 ease-in-out"
                      >
                        <h1>edit</h1>
                        <svg
                          width="1rem"
                          height="1rem"
                          viewBox="0 0 24 24"
                          fill="#ffffff"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-all duration-75 ease-in-out"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
                            fill={color}
                          />
                        </svg>
                      </button>
                      <button className="flex border items-center justify-between pl-[1rem] pr-[1rem] rounded-xl border-[#392E05] w-[8rem] h-[1.7rem] mb-[1rem] hover:bg-[#755C40] hover:text-white transition-all duration-75 ease-in-out"
                        onClick={handleClickBorrow}
                      >
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
      {clickEdit === true && (
        <form
          onSubmit={handleSubmit}
          action="POST"
          className="AddStaffDiv justify-center items-center flex absolute inset-0 z-50 bg-black bg-opacity-60 w-screen h-screen"
        >
          <div className="inputForm flex flex-col border p-[1.5rem] bg-[#F3EEE9] rounded-lg w-[45rem] h-[38.5rem]">
            <div className="topNav flex pb-[0.5rem] items-center justify-between border-[#392E05] w-[100%]">
              <h1 className="text-[1.4rem] text-[#392E05]">Edit Book</h1>
              <svg
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
                s
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={handleClickEditClose}
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
                    d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                    fill="#392E05"
                  />{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                    fill="#392E05"
                  />{" "}
                </g>
              </svg>
            </div>

            <div className="border flex border-l-0 border-r-0 justify-between h-[100%] border-t-[#392E05] border-b-[#392E05] w-[100%]">
              <div className="otherInput flex flex-col w-[50%] items-center mt-[0rem]">
                <input
                  type="text"
                  placeholder="Title"
                  className="border outline-none mt-[1rem] placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />

                <div className="flex flex-col w-[100%] justify-between items-center">
                  <Select
                    placeholder="Select Author(s)"
                    isMulti
                    classNamePrefix="select"
                    value="{selectedAuthors}"
                    onChange="{handleAuthorSelect}"
                    styles={customStyles}
                    className="mt-[1rem]"
                  />

                  <Select
                    placeholder="Select Genre(s)"
                    isMulti
                    options="{genreOption}"
                    classNamePrefix="select"
                    value="{selectedGenres}"
                    onChange="{handleGenreSelect}"
                    styles={customStyles}
                    className="mt-[1rem]"
                  />
                </div>

                <div className="flex w-[100%] items-center h-[15%] border-black">
                  <p className="w-[10rem] justify-center flex items-center">
                    Publication Date:
                  </p>
                  <input
                    type="date"
                    placeholder="Publication"
                    className="border outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[70%] pl-[1rem] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="ISBN"
                  className="border mt-[0rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />
                <input
                  type="text"
                  placeholder="Edition"
                  className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />
                <input
                  type="text"
                  placeholder="Format"
                  className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />

                <input
                  type="text"
                  placeholder="Number of Copies"
                  className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />
              </div>

              <div className="border-black w-[45%] h-[100%] pt-[1rem] flex items-center flex-col">
                <div className="draghere flex flex-col items-center justify-center border bg-[#392E05] bg-opacity-20 rounded-xl border-[#392E05] w-[100%] h-[40%]">
                  <svg
                    width="5rem"
                    height="5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>Upload file</p>
                  <div className="">
                    <input
                      type="file"
                      accept="image/*"
                      className="items-center flex w-[100%] none"
                    />
                  </div>
                </div>

                <textarea
                  placeholder="Synopsis..."
                  className="pb-[6rem] border-[#392E05] outline-none synopsis placeholder-[#392E05] bg-[#392E05] bg-opacity-20 border w-[100%] h-[13rem] pl-[1rem] pt-[0.5rem] rounded-xl mt-[2rem] overflow-wrap-break-word resize-none"
                />
              </div>
            </div>

            <div className="buttonsDiv w-[100%] h-[10%] justify-end items-center flex">
              <button
                type="submit"
                className="w-[10rem] text-white bg-[#392E05] h-[2rem] mt-[2rem] rounded-xl"
                onClick={handleClickEditClose}
              >
                <h1>Confirm</h1>
              </button>
            </div>
          </div>
        </form>
      )}

      
{clickBorrow === true && (
        <form
          onSubmit={handleSubmit}
          action="POST"
          className="AddStaffDiv justify-center items-center flex absolute inset-0 z-50 bg-black bg-opacity-60 w-screen h-screen"
        >
          <div className="inputForm flex flex-col border p-[1.5rem] bg-[#F3EEE9] rounded-lg w-[32rem] h-[17rem]">
            <div className="border-b border-[#392E05] w-[100%] flex items-center justify-between">
              <h1 className="text-[1.2rem] pb-[0.5rem]">Borrow Form</h1>
              <svg
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
                s
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={handleClickBorrowClose}
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
                    d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                    fill="#392E05"
                  />{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                    fill="#392E05"
                  />{" "}
                </g>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Borrower"
              className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
            />

            <div className="borrowFields flex w-[100%] justify-between items-center mt-[0.5rem]">
              <div className="flex flex-col">
                <h1>Borrow Date</h1>
                <input type="date" className="w-[13rem] border bg-[#392E05] bg-opacity-20 border-[#392E05] rounded-lg h-[2rem]"/>
              </div>
              <div className="flex flex-col">
                <h1>Due Date</h1>
                <input type="date" className="w-[13rem] border bg-[#392E05] bg-opacity-20 border-[#392E05] rounded-lg h-[2rem]"/>
              </div>
            </div>
            <div className="buttons flex w-[100%] justify-center items-center border-t border-t-[#392E05] mt-[1rem] pt-[1rem]">
              <button
                type="submit"
                className="w-[10rem] mr-[1rem] text-[#392E05] bg-[#392E05] bg-opacity-20 border-[#392E05] border h-[2rem] mt-[0rem] rounded-xl"
                onClick={handleClickBorrowClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[10rem] text-white bg-[#392E05] h-[2rem] mt-[0rem] rounded-xl"
                onClick={handleClickBorrowClose}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default StaffBookProfile;
