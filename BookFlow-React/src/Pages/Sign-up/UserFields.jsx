function signUpUser() {
  return (
    <div className="Signup-main-div flex h-screen w-screen justify-evenly items-center flex-col bg-black">
        <div className="flex text-white p-[2rem]">
            NAVBAR
        </div>
        <div
          className="bgPic absolute h-screen w-screen bg-[url('./assets/book-bg.jpg')] bg-cover bg-center opacity-10"
          style={{ pointerEvents: "none" }}
        />
      <div className="Signup-wrapper-div flex h-screen w-screen justify-evenly items-center">
        <form method="POST" action="" className="inputFields-div flex flex-col">
          <div className="name-div flex mb-[2rem]">
            <input
              className="flex w-[10rem] mr-[0.5rem] p-[0.5rem] placeholder:text-[#D5C5AE] text-[#D5C5AE] rounded-xl border-[0.2rem] outline-none bg-transparent border-[#D5C5AE]"
              placeholder="First name"
              type="text"
            />
            <input
              className="flex w-[10rem] mr-[0.5rem] p-[0.5rem] placeholder:text-[#D5C5AE] text-[#D5C5AE] rounded-xl border-[0.2rem] outline-none bg-transparent border-[#D5C5AE]"
              placeholder="Last name"
              type="text"
            />
          </div>

          <div className="others-div flex flex-col">
            <input
              className="flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
              placeholder="Username"
              type="text"
            />
            <input
              className="flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
              placeholder="Home Address"
              type="text"
            />
            <input
              className="flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
              placeholder="Phone Number"
              type="text"
            />

            <button className="flex border  border-[#D5C5AE] transition-[0.1s] hover:text-black hover:bg-[#D5C5AE] text-[#D5C5AE] justify-center rounded-lg  p-[0.5rem] w-[20.5rem]">
              Submit
            </button>
          </div>
        </form>

        <div className="divPic flex  text-white">PIC GOES HERE</div>
      </div>
    </div>
  );
}

export default signUpUser;
