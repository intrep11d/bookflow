import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import AdminBookEntry from "./Admin-Book-Entry";
import SearchBar from "./SearchBar";

const AdminEntryProfile = () => {
  const location = useLocation();
  const { entryData } = location.state || {}; // Retrieve entry data from state
  const [showBorrow, setShowBorrow] = useState(false);
  const [showFav, setShowFav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [borrowClick, setBorrowClick] = useState(false);
  const [favClick, setFavClick] = useState(false);

  const handleBorrowClick = () => {
    setBorrowClick(true);
    setFavClick(false);
  };

  const handleFavClick = () => {
    setFavClick(true);
    setBorrowClick(false);
  };

  const handleShowBorrow = () => {
    setShowBorrow(true);
    setShowFav(false);
  };

  const handleShowFav = () => {
    setShowFav(true);
    setShowBorrow(false);
  };

  const borrowEntries = [
    {
      BorrowID: 1,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    // Add more entries here as needed
    {
      BorrowID: 2,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 3,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 4,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
  ]; //SIMULATING BACKEND

  const favEntries = [
    {
      BorrowID: 1,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    // Add more entries here as needed
    {
      BorrowID: 2,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "returned",
    },
    {
      BorrowID: 3,
      Book: "Diary of Michael Jordan",
      DateBorrow: "20/11/2022",
      DateDue: "27/11/2022",
      DateReturn: "27/11/2022",
      Status: "borrowed",
    },
  ]; //SIMULATING BACKEND

  const handleShowProfile = (entry) => {
    showProfile === true ? setShowProfile(false) : setShowProfile(true);
    setSelectedEntry(entry);
  };
  if (!entryData) {
    // Handle the case if entryData is not available
    return <div>No data available</div>;
  }

  // Use entryData to display the details in your component
  return (
    <div>
      {entryData.Type === "Patron" && (
        <div className="overflow-x-hidden">
          <div className="userHomePage-div flex h-screen w-screen">
            <div className="mainContent flex h-[140%] w-[100%] flex-col">
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
                  href="/BookFlow-Admin-userTable"
                  className="mr-[2.5rem] border-white w-[7rem]
                h-[3rem] items-center justify-center flex bg-[#dac98d] bg-opacity-20 rounded-xl"
                >
                  Accounts
                </a>
                <a
                  href="/BookFlow-Admin-bookTable"
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
                <div className="userProfile border-red-600 w-[100%] h-[45%] mb-[3rem]">
                  <div className="UserProfile flex items-center w-[100%] mb-[1rem]">
                    <Link to="/BookFlow-Admin-Usertable">
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
                      User Profile
                    </h1>
                    <div className="w-[85%] border-[#392E05] border-opacity-40 border" />
                  </div>

                  <div className="flex border rounded-xl bg-[#392E05] bg-opacity-20 p-[2rem] w-[100%] h-[80%] mb-[1rem]">
                    <div className="profilePic border-r border-[#392E05] border-opacity-40 w-[20%] flex flex-col justify-center items-center">
                      <div className="">
                        <svg
                          width="7rem"
                          height="8rem"
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
                      <div className="text-[1rem] font-bold">
                        {entryData.Name}
                      </div>
                      <div className="mt-2">
                        <select className="text-[1rem] pl-[1.5rem] rounded-xl border-gray-300 bg-[#392E05] bg-opacity-10 w-[7rem] flex justify-center">
                          <option className="text-[1rem]" value="option1">
                            Unblock
                          </option>
                          <option value="option2">Blocked</option>
                        </select>
                      </div>
                    </div>
                    <div className="information flex flex-col border-r pl-[3rem] pr-[3rem] border-[#392E05] border-opacity-40 w-[40%]">
                      <h1 className="text-[1.5rem] font-bold">Information</h1>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Username</h1>
                        <h1 className="font-bold">{entryData.Username}</h1>
                      </div>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Email</h1>
                        <h1 className="font-bold">{entryData.Email}</h1>
                      </div>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Phone Number</h1>
                        <h1 className="font-bold">{entryData.PhoneNumber}</h1>
                      </div>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Home Address</h1>
                        <h1 className="font-bold">{entryData.Home}</h1>
                      </div>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Joined</h1>
                        <h1 className="font-bold">{entryData.Date}</h1>
                      </div>
                    </div>
                    <div className="data w-[40%] pl-[3rem] pr-[3rem]">
                      <h1 className="text-[1.5rem] font-bold">Data</h1>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Books Borrowed</h1>
                        <h1 className="font-bold">{entryData.Borrow}</h1>
                      </div>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Overdue Books</h1>
                        <h1 className="font-bold">{entryData.OverDue}</h1>
                      </div>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Books Lost</h1>
                        <h1 className="font-bold">{entryData.Lost}</h1>
                      </div>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Favorite Author</h1>
                        <h1 className="font-bold">{entryData.FavAuth}</h1>
                      </div>
                      <div className="flex w-[100%] justify-between pt-[1rem]">
                        <h1>Favorite Genre</h1>
                        <h1 className="font-bold">{entryData.Genre}</h1>
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
                <div className="searchExport flex justify-between border-[#392E05] w-[100%]">
                  <div className="searchBar relative flex w-[110rem]">
                    <SearchBar></SearchBar>
                  </div>

                  <div className="exportDiv flex items-center w-[8rem]">
                  </div>
                </div>

                <div className="tableDiv bg-[#392E05] p-[2rem] bg-opacity-20 rounded-t-xl mt-[2rem] w-[100%] h-[60%] border-black">
                  <div className="tableTab flex w-[100%] border-b items-center border-[#392E05] h-[3rem] border-opacity-40 justify-between">
                    <div className="flex w-[20rem] border-black justify-center items-center h-[100%]">
                      <button
                        className={`flex border-b w-[50%] justify-center h-[104%] items-center border-[#392E05] ${
                          borrowClick === true
                            ? "border-opacity-100"
                            : "border-opacity-0"
                        } `}
                        onClick={() => {
                          handleBorrowClick();
                          handleShowBorrow();
                        }}
                      >
                        <h1 className="text-[1rem] font-bold">Borrowed</h1>
                        <h1 className="ml-[0.5rem] w-[2rem] h-[1.5rem] text-[1rem] bg-[#392E05] bg-opacity-20 rounded-lg">
                          {borrowEntries.length}
                        </h1>
                      </button>

                      <button
                        className={`flex border-b w-[50%] justify-center h-[104%] items-center border-[#392E05] ${
                          favClick === true
                            ? "border-opacity-100"
                            : "border-opacity-0"
                        }`}
                        onClick={() => {
                          handleFavClick();
                          handleShowFav();
                        }}
                      >
                        <h1 className="text-[1rem] font-bold">Favorites</h1>
                        <h1 className="ml-[0.5rem] w-[2rem] bg-[#392E05] bg-opacity-20 rounded-lg">
                          {favEntries.length}
                        </h1>
                      </button>
                    </div>
                    <h1>{`Showing 0 out of 0 results`}</h1>
                  </div>

                  <div className="tableContent flex flex-col border-red-600 h-[95%] w-[100%] overflow-y-auto overflow-x-hidden">
                    <div className="tableContentID mt-[2rem] justify-around text-[1rem] flex bg-[#392E05] bg-opacity-20 h-[2.5rem] items-center w-[100%] border-[#392E05] rounded-md border">
                      <h1>Borrow ID</h1>
                      <h1>Book</h1>
                      <h1 className="ml-[6rem]">Date Borrowed</h1>
                      <h1 className="">Due Date</h1>
                      <h1>Date Returned</h1>
                      <h1>Status</h1>
                    </div>

                    <div className="border-blue-700 h-[80%] w-[100%] mt-[1rem] overflow-y-auto overflow-x-auto">
                      {/* Rendering AdminEntry components dynamically using map */}
                      {showBorrow === true && (
                        <>
                          {borrowEntries.map((entry, index) => (
                            <AdminBookEntry
                              key={index} // Add a unique key for each entry
                              BorrowID={entry.BorrowID}
                              Book={entry.Book}
                              DateBorrow={entry.DateBorrow}
                              DateDue={entry.DateDue}
                              DateReturn={entry.DateReturn}
                              Status={entry.Status}
                            />
                          ))}
                        </>
                      )}

                      {showFav === true && (
                        <>
                          {favEntries.map((entry, index) => (
                            <AdminBookEntry
                              key={index} // Add a unique key for each entry
                              BorrowID={entry.BorrowID}
                              Book={entry.Book}
                              DateBorrow={entry.DateBorrow}
                              DateDue={entry.DateDue}
                              DateReturn={entry.DateReturn}
                              Status={entry.Status}
                            />
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEntryProfile;
