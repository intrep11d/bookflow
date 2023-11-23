function UserCategory() {
    return (
      <div className="userHomePage-div flex h-screen w-screen">
        <div className="mainContent flex h-screen w-[100%] flex-col">
          <div className="topNav flex w-[100%] h-[3.5rem] shadow-md bg-[url('./assets/newbg.jpg')] bg-opacity-80">
          <div className="profileIcon flex pl-[1rem]">
            <svg
              className="flex mt-[0rem]"
              width="3rem"
              height="3rem"
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

          
          </div>
        </div>
      </div>
    );
  }
  
  export default UserCategory;
  