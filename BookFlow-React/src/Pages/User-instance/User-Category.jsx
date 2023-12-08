import SearchBar from "../../Components/SearchBar";
import BookRec from "../../Components/BookRecs";
import { useState } from "react";
import atomic from "./atomic-habits.jpg";
import SidePanel from "../../Components/SidePanel";
import "./Category.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function UserCategory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("All"); // Default value
  const [sidePanel, setSidePanel] = useState(false);
  const [selectedBookID, setSelectedBookID] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [goProfile, setGoProfile] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    
  };

  const handleProfile = () => {
    setGoProfile(true);
  };

  const handleBookClick = (bookID) => {
    setSelectedBookID(bookID);
  };

  const searchOptions = ["All", "Author", "Title", "Genre"]; // Your search options

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const allEntries = [
    {
      Image: atomic,
      BookID: 1,
      Title: "Michael Jordan Biography",
      Author: "Michael Jordan",
      Genre: ["Dystopian", "Fantasy", "Horror"],
      ISBN: "892347162",
      Status: "available",
      Copies: 3,
    },
    // Add more entries here as needed
    {
      BookID: 2,
      Title: "Marvel vs Capcom",
      Author: "yapyapiee",
      Genre: ["Romance", "Shoujo", "Anime", "Gay"],
      ISBN: "234985323",
      Status: "available",
      Copies: 2,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: ["Bio", "Horror"],
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
  ]; //SIMULATING BACKEND

  const filterEntries = (entries, query, option) => {
    return entries.filter((entry) => {
      const lowerCaseQuery = query.toLowerCase();
      if (option === "All") {
        return (
          entry.Author.toLowerCase().includes(lowerCaseQuery) ||
          entry.Title.toLowerCase().includes(lowerCaseQuery) ||
          entry.Genre.some((genre) =>
            genre.toLowerCase().includes(lowerCaseQuery)
          )
        );
      } else if (option === "Author") {
        return entry.Author.toLowerCase().includes(lowerCaseQuery);
      } else if (option === "Title") {
        return entry.Title.toLowerCase().includes(lowerCaseQuery);
      } else if (option === "Genre") {
        return entry.Genre.some((genre) =>
          genre.toLowerCase().includes(lowerCaseQuery)
        );
      }
      return true;
    });
  };

  const filteredEntries = filterEntries(
    allEntries,
    searchQuery,
    selectedOption
  );

  //   const filteredEntries = allEntries.filter((entry) =>
  //   entry.Title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="userHomePage-div flex h-screen w-screen">
        <div className="mainContent flex h-[100%] w-[100%] flex-col">
          <div className="topNav flex w-[100%] h-[10rem] justify-between shadow-xl bg-[url('./assets/newbg.jpg')] bg-opacity-80">
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
            <div className="topRightContents flex w-auto items-center mr-[1.5rem] h-[5rem] border-purple-700">
              <div className="profileIconBorder border flex w-[5.5rem] justify-center rounded-3xl h-[2.4rem] items-center bg-[#755D41]">
                <img className="profileIcon flex w-[10rem] h-[2.3rem] mr-[0.5rem] rounded-3xl" />
                <div className="profileArrow h-[1rem] w-[10rem] relative">
                  <svg
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                    onClick={toggleDropdown}
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
                  {showDropdown && (
                    <ul className="absolute bg-[#e2bd92] rounded shadow-md w-40 mt-2 left-[-9rem] top-[1rem]">
                      <div className="w-[10rem]">
                          <Link
                          to="/BookFlow-User-Profile-:userID"
                          >
                          <li className="flex hover:cursor-pointer justify-center border border-black bg-[#e2bd92] hover:bg-[#755D41] hover:text-white"
                            onClick={handleProfile}
                          >
                            Profile
                          </li>

                          </Link>
                          <Link
                          to="/"
                        >
                        <li className="flex hover:cursor-pointer justify-center border border-black bg-[#e2bd92] hover:bg-[#755D41] hover:text-white">
                          Sign out 
                        </li>
                        </Link>
                      </div>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="wrapperMiddle flex">
            <div className="middleContentDiv  flex flex-col h-[96vh] w-screen pl-[3rem]">
              <div className="SearchBar relative flex mt-[2rem] w-[30rem]">
                <select
                  onChange={handleOptionChange}
                  value={selectedOption}
                  className="bg-[#755D41] w-[5rem] bg-opacity-20 border-[#392E05] border rounded-xl pl-[0.5rem]"
                >
                  {searchOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <svg
                  height="1rem"
                  width="1rem"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#000000"
                  className="absolute ml-[6.5rem] mt-[0.5rem]"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <style type="text/css"> </style>{" "}
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
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                  className="searchExport placeholder:text-black pl-[2rem] ml-[1rem] h-[2rem] flex relative rounded-xl border border-[#392E05] bg-opacity-20 bg-[#392E05] w-[100%]"
                />
              </div>

              <div className="flex w-[100%] mt-[1rem] h-[120%] ml-[1rem]">
                <div className="mainContent overflow-y-auto flex flex-wrap w-[100%] h-[95%]">
                  {filteredEntries.map((entry, index) => (
                    <div
                      className=""
                      onClick={() => {
                        handleBookClick(entry.BookID);
                        if(sidePanel === true) {
                          setSidePanel(false);
                        } else {
                          setSidePanel(true);
                        }
                      }}
                    >
                      <BookRec
                        image={atomic}
                        key={index}
                        author={entry.Author}
                        title={entry.Title}
                        genre={entry.Genre}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {sidePanel === true && <SidePanel bookID={selectedBookID} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCategory;
