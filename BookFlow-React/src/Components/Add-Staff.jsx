function AddStaffForm() {
  return (
    <div className="AddStaffDiv justify-center items-center flex absolute inset-0 z-50 bg-black bg-opacity-60 w-screen h-screen">
      <div className="inputForm border p-[1.5rem] bg-white rounded-lg w-[27%] h-[55%]">
        <div className="topNav flex pb-[0.5rem] items-center justify-between border-[#392E05] w-[100%]">
          <h1 className="text-[1.4rem] text-[#392E05]">Add Staff</h1>
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
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

        <div className="border h-[77%] border-t-[#392E05] border-b-[#392E05] w-[100%]">
          <div className="nameInput flex w-[100%] justify-between mt-[1.5rem]">
            <input
              type="text"
              placeholder="First Name"
              className="border outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[49%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[49%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
            />
          </div>

          <div className="otherInput flex flex-col">
            <input
              type="text"
              placeholder="Phone Number"
              className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
            />

            <input
              type="text"
              placeholder="Home Address"
              className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
            />
            <input
              type="password"
              placeholder="Password"
              className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
            />
          </div>
        </div>
        
        <div className="buttonsDiv w-[100%] h-[10%] justify-center items-center flex">
            <button className="w-[13rem] text-white bg-[#392E05] h-[2rem] mt-[2rem] rounded-xl">Done</button>
        </div>
      </div>
    </div>
  );
}

export default AddStaffForm;
