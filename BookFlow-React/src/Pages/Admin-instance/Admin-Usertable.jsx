import "./Admin-Usertable.css";
import { useEffect, useState } from "react";
import AdminEntry from "../../Components/Admin-Entry";

function UserAdminTable() {
  const [userCount, setUserCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [userClick, setUserClick] = useState(false);
  const [staffClick, setStaffClick] = useState(false);
  const [showResults, setShowResults] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const userEntries = [
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    // Add more entries here as needed
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
    {
      UserID: 1,
      Name: "Pia Lorraine Tantay",
      Username: "yapyapiee",
      PhoneNumber: "0928643478",
      Email: "pia@whatever.com",
      Status: "active",
    },
  ];

  const handleUserClick = () => {
    setUserClick(true);
    setStaffClick(false);
  };

  const handleStaffClick = () => {
    setStaffClick(true);
    setUserClick(false);
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <div className="userHomePage-div flex h-screen w-screen">
        <div className="mainContent flex h-[100%] w-[100%] flex-col">
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
                <h1 className="mr-[2.5rem]">Accounts</h1>
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
            <div className="searchExport flex justify-between border-[#392E05] w-[100%]">
              <div className="searchBar flex w-[110rem]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-[#392E05] w-[32%] h-[2.3rem] placeholder:text-[#000000] placeholder:text-opacity-50 rounded-md pl-[2.5rem] bg-opacity-20 bg-[#392E05]"
                  placeholder="Search User ID, Username, Name and etc..."
                />

                <svg
                  className="absolute mt-[0.4rem] ml-[0.6rem]"
                  height="1.5rem"
                  width="1.2rem"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#392E05"
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
              </div>

              <div className="exportDiv flex items-center w-[8rem]">
                <button className=" bg-[#392E05] bg-opacity-20 border items-center flex rounded-md justify-evenly border-[#392E05] w-[100%] h-[100%]">
                  <svg
                    fill="#392E05"
                    width="1.2rem"
                    height="1.2rem"
                    viewBox="0 0 24 24"
                    id="export-left-2"
                    data-name="Flat Line"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon flat-line"
                  >
                    <polyline
                      id="primary"
                      points="3 9 3 3 9 3"
                      style={{
                        fill: "none",
                        stroke: "rgb(0, 0, 0)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    ></polyline>
                    <line
                      id="primary-2"
                      data-name="primary"
                      x1="3"
                      y1="3"
                      x2="13"
                      y2="13"
                      style={{
                        fill: "none",
                        stroke: "rgb(0, 0, 0)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    ></line>
                    <path
                      id="primary-3"
                      data-name="primary"
                      d="M13,3h7a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V13"
                      style={{
                        fill: "none",
                        stroke: "rgb(0, 0, 0)",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    ></path>
                  </svg>
                  <h1>Export</h1>
                </button>
              </div>
            </div>

            <div className="tableDiv bg-[#392E05] p-[2rem] bg-opacity-20 rounded-t-xl mt-[2rem] w-[100%] h-[100%] border-black">
              <div className="tableTab flex w-[100%] border-b items-center border-[#392E05] h-[3rem] border-opacity-40 justify-between">
                <div className="flex w-[20rem] border-black justify-center items-center h-[100%]">
                  <button
                    className={`flex border-b w-[50%] justify-center h-[104%] items-center border-[#392E05] ${
                      userClick === true
                        ? "border-opacity-100"
                        : "border-opacity-0"
                    } `}
                    onClick={handleUserClick}
                  >
                    <h1 className="text-[1rem] font-bold">User</h1>
                    <h1 className="ml-[0.5rem] w-[2rem] h-[1.5rem] text-[1rem] bg-[#392E05] bg-opacity-20 rounded-lg">
                      {userCount}
                    </h1>
                  </button>

                  <button
                    className={`flex border-b w-[50%] justify-center h-[104%] items-center border-[#392E05] ${
                      staffClick === true
                        ? "border-opacity-100"
                        : "border-opacity-0"
                    }`}
                    onClick={handleStaffClick}
                  >
                    <h1 className="text-[1rem] font-bold">Staff</h1>
                    <h1 className="ml-[0.5rem] w-[2rem] bg-[#392E05] bg-opacity-20 rounded-lg">
                      {staffCount}
                    </h1>
                  </button>
                </div>
                <h1>{`Showing ${showResults} out of ${totalResults} results`}</h1>
              </div>

              <div className="tableContent flex flex-col border-red-600 h-[95%] w-[100%] overflow-y-auto overflow-x-hidden">
                <div className="tableContentID mt-[2rem] justify-around text-[1rem] flex bg-[#392E05] bg-opacity-20 h-[2.5rem] items-center w-[100%] border-[#392E05] rounded-md border">
                  <h1>User ID</h1>
                  <h1>Name</h1>
                  <h1>Username</h1>
                  <h1>Phone Number</h1>
                  <h1>Email</h1>
                  <h1>Status</h1>
                </div>

                <div className="border-blue-700 h-[100%] w-[100%] mt-[1rem] overflow-y-auto">
                  {/* Rendering AdminEntry components dynamically using map */}
                  {userEntries.map((entry, index) => (
                    <AdminEntry
                      key={index} // Add a unique key for each entry
                      UserID={entry.UserID}
                      Name={entry.Name}
                      Username={entry.Username}
                      PhoneNumber={entry.PhoneNumber}
                      Email={entry.Email}
                      Status={entry.Status}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAdminTable;
