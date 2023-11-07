function userStaff() {
  return (
    <div className="mainDiv flex h-screen w-screen items-center flex-col bg-black">
      <div
        className="bgPic absolute h-screen w-screen bg-[url('./assets/book-bg.jpg')] bg-cover bg-center opacity-10"
        style={{ pointerEvents: "none" }}
      />
      <div className="navUsBar flex justify-between w-[100%]">
        <h1 className="flex pt-[1rem] pl-[4rem] text-white">LOGO BookFlow</h1>
        <a className="flex pt-[1rem] pr-[4rem] text-white" href="#">
          Sign up
        </a>
      </div>


        <div
          className="mainCard-Div flex w-[50%] justify-center mt-[15%] max-[900px]:mt-[40%] max-[600px]:mt-[50%]"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="userCard-Div flex bg-white bg-opacity-30 mr-[5rem] flex-col items-center w-[12rem]">
            <svg
              width="7rem"
              height="10rem"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h1 className="text-[2rem]">user</h1>

          </div>

          <div
            className="groupCard-Div flex bg-white bg-opacity-30 w-[12rem] justify-center items-center flex-col"
            style={{ position: "relative", zIndex: 2 }}
          >
            <svg
              width="8rem"
              height="10rem"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="3"
              stroke="#000000"
              fill="none"
            >
              <circle cx="31.89" cy="22.71" r="5.57" />
              <path d="M43.16,43.74A11.28,11.28,0,0,0,31.89,32.47h0A11.27,11.27,0,0,0,20.62,43.74Z" />
              <circle cx="48.46" cy="22.71" r="5.57" />
              <path d="M46.87,43.74H59.73A11.27,11.27,0,0,0,48.46,32.47h0a11.24,11.24,0,0,0-5.29,1.32" />
              <circle cx="15.54" cy="22.71" r="5.57" />
              <path d="M17.13,43.74H4.27A11.27,11.27,0,0,1,15.54,32.47h0a11.24,11.24,0,0,1,5.29,1.32" />
            </svg>

            <h1>staff</h1>
          </div>
        </div>
    </div>
  );
}

export default userStaff;
