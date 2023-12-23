import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function passwordField() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // State to track checkbox status
  const basicInfo = JSON.parse(localStorage.getItem('basicInfo')); // Retrieve basic info
  const firstName = basicInfo?.firstName;
  const email = credentials?.email;

  // Validation function
  const validateCredentials = () => {
    const { email, password, confirmPassword } = credentials;
    let newErrors = {};
    // Simple email regex, you can use a more complex one
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) { // Example rule: password length
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleCheck = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  const handleCredentialsChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleCredentialsSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validateCredentials();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Confirm that passwords match (if using password confirmation)
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

   
    const completeData = { ...basicInfo, ...credentials };

    setLoading(true); // Show loading indication

    try {
      const response = await fetch('http://localhost:3000/api/users/signup', { // Adjust with your server URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(completeData),
      });

      setLoading(false); // Hide loading indication

      if (response.ok) {
        // Handle success
        setVisible(true); // Show confirmation pop-up or redirect
        // You can redirect to login page or home page after a delay
        setTimeout(() => {
          history.push('/'); // Redirect to login page
        }, 3000);
      } else {
        // Handle errors
        const data = await response.json();
        alert(data.message); // Show error message
      }
    } catch (error) {
      setLoading(false);
      console.error('There was an error during signup:', error);
    }
    setErrors({});
  };

  const handleVisible = () => {
    setLoading(true); // Set loading to true when the button is clicked
    setTimeout(() => {
      setLoading(false); // Set loading back to false after a simulated delay (replace this with your actual API call)
      setVisible(true); // Show the pop-up after the loading delay
    }, 1500); // Simulated 2-second delay
  };

  // const handleVisible = () => {
  //   setVisible(true);
  // };

  const cancelVisible = () => {
    history.push("/"); // Redirect to the login page
  };
  // console.log(basicInfo);
  return (
    <div className="Signup-main-div flex h-screen w-screen flex-col bg-black overflow-y-auto">
      <div
        className="bgPic absolute h-screen w-screen bg-[url('./assets/newbg.jpg')] bg-cover bg-center opacity-10"
        style={{ pointerEvents: "none" }}
      />

      <div className="flex navBar justify-start text-white pt-[2rem]">
        <div className="flex pl-[3rem]">
          <p>Logo</p>
          <h1 className="flex pl-[1rem]">BookFlow</h1>
        </div>
      </div>

      <form className="userEmail flex flex-col items-center pt-[12%]" onSubmit={handleCredentialsSubmit}>
        {/* <form onSubmit={handleCredentialsSubmit} className="userEmail flex flex-col items-center pt-[12%]"> */}
        <input
          name="email"
          className="flex w-[20.5rem] mr-[1rem] p-[0.5rem]  placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
          type="email"
          value={credentials.email}
          onChange={handleCredentialsChange}
          placeholder="Email"
          required
        />
        {/* {errors.email && <div className="error-message">{errors.email}</div>} */}
         <input
          name="password"
          className="userPass flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
          type="password"
          value={credentials.password}
          onChange={handleCredentialsChange}
          placeholder="Password"
          required
        />
        {/* {errors.password && <div className="error-message">{errors.password}</div>} */}
        <input
          name="confirmPassword"
          className="userConfirm flex w-[20.5rem] mr-[1rem] p-[0.5rem] placeholder:text-[#D5C5AE] outline-none bg-transparent text-[#D5C5AE] border-[0.2rem] border-[#D5C5AE] rounded-xl mb-[2rem]"
          type="password"
          value={credentials.confirmPassword}
          onChange={handleCredentialsChange}
          placeholder="Confirm password"
          required
        />
        {/* {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>} */}

        <div className="flex w-[30%] justify-center">
          <input type="checkbox" name="" id="" onClick={handleCheck} required />
          <h1 className="flex text-[#D5C5AE] pl-[1rem]">
            I have read and agreed to the
            <h1 className="text-[#755D41] pl-[0.5rem] pr-[0.5rem]">Privacy Policy</h1>
          </h1>
        </div>

        <button
          type="submit"
          className="flex border mt-[1.5rem] border-[#D5C5AE] transition-[0.1s] hover:text-black hover:bg-[#D5C5AE] text-[#D5C5AE] justify-center rounded-lg  p-[0.5rem] w-[20.5rem]"
          onClick={handleVisible}
        >
          Verify Email Address
        </button>
        {/* </form> */}
      </form>

      <div className="flex mt-[13%] justify-center">
        <h1 className="flex text-[#D5C5AE]">Already have an account?</h1>
        <a
          href="/"
          className="flex text-[#755D41] pl-[0.5rem] hover:underline cursor-pointer"
        >
          Log in
        </a>
      </div>

      {loading  && (
        <div className="absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-70">
          <svg
            className="animate-spin"
            fill="#ffffff"
            width="5rem"
            height="5rem"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              <path d="M41.9 23.9c-.3-6.1-4-11.8-9.5-14.4-6-2.7-13.3-1.6-18.3 2.6-4.8 4-7 10.5-5.6 16.6 1.3 6 6 10.9 11.9 12.5 7.1 2 13.6-1.4 17.6-7.2-3.6 4.8-9.1 8-15.2 6.9-6.1-1.1-11.1-5.7-12.5-11.7-1.5-6.4 1.5-13.1 7.2-16.4 5.9-3.4 14.2-2.1 18.1 3.7 1 1.4 1.7 3.1 2 4.8.3 1.4.2 2.9.4 4.3.2 1.3 1.3 3 2.8 2.1 1.3-.8 1.2-2.5 1.1-3.8 0-.4.1.7 0 0z" />
            </g>
          </svg>
        </div>
      )}

      {visible && (
        <div className="popUp-div absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[50%] w-[50%] bg-white rounded-lg z-20 transition-opacity duration-500 opacity-100">
          <div className="flex h-[100%] w-[100%] items-center  flex-col">
            <div className="flex mt-[3%] mb-[5%]">
              <svg
                width="8rem"
                height="6rem"
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
                    d="M15 18L17 20L21 16M11 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V12M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863"
                    stroke="#755D41"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
            </div>
            <div className="flex flex-col  items-center">
              <h1 className="text-[1.5rem] font-bold">
                Verify your email address
              </h1>
              <center>
                <p className="flex w-[70%] mt-[3%] text-[100%]">
                  Hey {firstName}, you’re almost ready to start enjoying BookFlow. We’ve
                  sent an email to {email} to confirm the validity of your
                  email address.
                </p>
              </center>
            </div>

            <div className="flex mt-[2%]">
              ---------------------------------------------------------------------------------
            </div>

            <div className="flex mt-[5%]">
              <div className="">If you didn’t get any email,</div>
              <div className="pl-1 text-[#392E05]">
                <a href="#" className="hover:underline">
                  resend confirmation email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {visible && (
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <div
            className="h-full w-full bg-black opacity-50"
            onClick={cancelVisible}
          />
        </div>
      )}
    </div>
  );
}

export default passwordField;
