import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation after login

function LogIn() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); // State to store login error
  const history = useHistory();
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/users/login', { // Adjust the URL based on your backend setup
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({credential: credentials.credential, // This is either email or username
        password: credentials.password,
        rememberMe: rememberMe}),
      });

     
      if (response.ok) {
        // Assuming the backend sends a JWT token on successful login
        const data = await response.json();
        localStorage.setItem('token', data.token); // Store the token
        
        if (data.role === 'Admin') {
          history.push('/BookFlow-Admin-userTable');
      } else {
          history.push('/BookFlow-userCategory'); // Redirect to the dashboard or home page
      }
  } else {
      // Handle errors
      // Handle errors, such as invalid credentials
      setError(data.message || 'Login failed');
  }
    } catch (error) {
      console.error('Login request failed', error);
      setError('Login request failed');
    }
  };

  return (
    <div className="mainDiv flex justify-center h-screen w-screen items-center flex-col bg-black">
      <div className="navBar flex h-[4rem] w-[100%] justify-between">
        <div className="flex pl-[3rem] pt-[1rem] text-white">
          
          <h1 className="flex pl-4  text-white">BookFlow</h1>
        </div>
      </div>
      <form
        method="POST"
        action=""
        className="inputField flex flex-col mt-[15%] max-md:mt-[50%] max-lg:mt-[45%]"
        onSubmit={handleSubmit}
      >
        <input
          className="userField bg-transparent text-[#D5C5AE] border-[0.15rem] max-[360px]:w-[19rem] border-[#D5C5AE] mb-5 rounded-[0.6rem] w-[22rem] h-[3rem] pl-2 placeholder-[#D5C5AE] outline-none"
          type="text"
          name="credential"
          onChange={handleChange}
          placeholder="Email/Username"
        />
        <input
          className="passField bg-transparent text-[#D5C5AE] border-[0.15rem] max-[360px]:w-[19rem]  border-[#D5C5AE] rounded-[0.6rem] w-[22rem] h-[3rem] pl-2 placeholder-[#D5C5AE] outline-none"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />

        <div className="remPass-main-div flex justify-around">
          <div className="checkBox-div flex">
            <input
              className="checkBox-input border-[#AC9F8C] flex mt-3 rounded-lg mr-2"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <h1 className="flex mt-3 text-[#AC9F8C]">Remember me</h1>
          </div>
          <a
            className="forgotPass hover:underline hover:text-[#D5C5AE] flex mt-3 text-[#755D41]"
            href="#"
          >
            Forgot password?
          </a>
        </div>

        <div className="flex justify-center mt-[2.5rem]">
          <button type="submit" className="flex border-none w-[22rem] max-[360px]:w-[15rem] justify-center bg-[#755D41] text-[#D3CCC0] rounded-lg pt-[0.5rem] pb-[0.5rem] transition duration-75 hover:bg-[#D3CCC0] hover:text-[#755D41]">
            Submit
          </button>
        </div>
      </form>
      <div className="text-[#AC9F8C] regDiv flex mt-auto max-lg:mb-[5rem]">
        <h1>Don't have an account?</h1>
        <a
          className="text-[#755D41] pl-1 mb-[2rem] hover:underline hover:text-[#D5C5AE]"
          href="/BookFlow-Signup"
        >
          Register here
        </a>
      </div>
      <div
        className="bgPic absolute h-screen w-screen bg-[url('./assets/newbg.jpg')] bg-cover bg-center opacity-10"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}

export default LogIn;
