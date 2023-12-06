import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function signUpUser() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: ''
  });
  
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('basicInfo', JSON.stringify(formData)); // Store in local storage
    history.push('/BookFlow-Password'); // Navigate to the password page
  };
  
  return (
    <div className="Signup-main-div flex h-screen w-screen justify-evenly items-center flex-col bg-black">
      <div className="navBar-div flex w-[100%] justify-between">
        <div
          className="bgPic absolute h-screen w-screen bg-[url('./assets/newbg.jpg')] bg-cover bg-center opacity-10"
          style={{ pointerEvents: "none" }}
        />
        <div className="flex text-white pl-[3rem] pt-[1rem]">Logo</div>
        <div className="flex text-white pr-[3rem] pt-[1rem]">Test</div>
      </div>

      <div className="Signup-wrapper-div flex h-screen w-screen justify-evenly items-center">
        <form method="POST" onSubmit={handleSubmit} className="inputFields-div flex flex-col">
          <div className="name-div flex mb-[1.5rem]">

            <input name="firstName" value={formData.firstName} onChange={handleChange}
              className="userFirstName flex w-[10.5rem] mr-[0.5rem] p-[0.5rem] placeholder:text-[#D5C5AE] text-[#D5C5AE] rounded-xl border-[0.2rem] outline-none bg-transparent border-[#D5C5AE]"
              placeholder="First Name"
              type="text" 
            />
            <input name="lastName" value={formData.lastName} onChange={handleChange}
              className="userLastName flex w-[10.5rem] mr-[0.5rem] p-[0.5rem] placeholder:text-[#D5C5AE] text-[#D5C5AE] rounded-xl border-[0.2rem] outline-none bg-transparent border-[#D5C5AE]"

              placeholder="Last name"
              type="text"
            />
          </div>

          <div className="others-div flex flex-col">

            <input name="username" value={formData.username} onChange={handleChange}
              className="userName flex w-[21.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[1.5rem]"

              placeholder="Username"
              type="text"
              required
            />

            <input name="address" value={formData.address} onChange={handleChange}
              className="userHomeAd flex w-[21.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[1.5rem]"

              placeholder="Home Address"
              type="text"
              required
            />

            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}
              className="userPhoneNum flex w-[21.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[1.5rem]"

              placeholder="Phone Number"
              type="text"
              required
            />
            
            <button type="submit" className="flex border mt-[3rem] bg-[#755D41] border-[#755D41] transition-[0.1s] hover:text-black hover:bg-[#B8A48E] text-[#D5C5AE] justify-center rounded-lg  p-[0.5rem] w-[21.5rem]">
              {/* <a className="w-[100%]" href="/BookFlow-Password"> */}
                Next
              {/* </a> */}
            </button>

            <div className="flex mt-[13%] justify-center">
              <h1 className="flex text-[#D5C5AE]">Already have an account?</h1>
              <a
                href="/"
                className="flex text-[#755D41] pl-[0.5rem] hover:underline cursor-pointer"
              >
                Log in
              </a>
            </div>
          </div>
        </form>

        <div className="divPic flex  text-white">
          <svg
            width="20rem"
            height="20rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#D5C5AE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default signUpUser;
