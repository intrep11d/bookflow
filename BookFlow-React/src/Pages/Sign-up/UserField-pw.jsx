function passwordField() {
  return (
    <div className="Signup-main-div flex h-screen w-screen flex-col bg-black">
      <div
        className="bgPic absolute h-screen w-screen bg-[url('./assets/book-bg.jpg')] bg-cover bg-center opacity-10"
        style={{ pointerEvents: "none" }}
      />

      <div className="flex navBar justify-start text-white pt-[2rem]">
        <div className="flex pl-[3rem]">
            <p>Logo</p>
            <h1 className="flex pl-[1rem]">BookFlow</h1>
        </div>
      </div>

      <div className="flex flex-col items-center pt-[12%] max-[912px]:pt-[50%] max-[548]:pt-[10%]">
        <input
          type="text"
          className="flex w-[20.5rem] mr-[1rem] p-[0.5rem]  placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
          placeholder="Email"
        />
        <input
          type="password"
          className="flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
          placeholder="Password"
        />
        <input
          type="password"
          className="flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
          placeholder="Confirm password"
        />

        <div className="flex w-[30%] justify-center">
            <input type="checkbox" name="" id="" />
            <h1 className="flex text-[#D5C5AE] pl-[1rem]">I agree with 
                <h1 className="text-[#755D41] pl-[0.5rem] pr-[0.5rem]">privacy</h1>
                <h1>and</h1> 
                <h1 className="text-[#755D41] pl-[0.5rem]">policy</h1>
            </h1>
        </div>

        <button className="flex border mt-[2rem] border-[#D5C5AE] transition-[0.1s] hover:text-black hover:bg-[#D5C5AE] text-[#D5C5AE] justify-center rounded-lg  p-[0.5rem] w-[20.5rem]">
          Verify Email Address
        </button>
      </div>

      <div className="flex mt-[11%] justify-center">
        <h1 className="flex text-[#D5C5AE]">Already have an account?</h1>
        <a href="http://localhost:5173/" className="flex text-[#755D41] pl-[0.5rem] hover:underline cursor-pointer">Log in</a>
      </div>
    </div>
  );
}

export default passwordField;
