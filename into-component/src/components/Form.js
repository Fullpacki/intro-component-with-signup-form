import IconError from "../images/icon-error.svg";
import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorLastName, setErrorLastName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setErrorVisible(false);
    setErrorFirstName(false);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setErrorVisible(false);
    setErrorLastName(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorVisible(false);
    setErrorEmail(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorVisible(false);
    setErrorPassword(false);
  };

  const handleSubmit = () => {
    let hasError = false;

    if (firstName.trim() === "") {
      setErrorFirstName(true);
      hasError = true;
    }

    if (lastName.trim() === "") {
      setErrorLastName(true);
      hasError = true;
    }

    if (!isValidEmail(email)) {
      setErrorEmail(true);
      hasError = true;
    }

    if (password === "") {
      setErrorPassword(true);
      hasError = true;
    }

    if (hasError) {
      setErrorVisible(true);
    } else {
      setErrorVisible(false);
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div id="form" className="flex flex-col gap-5 xl:w-5/12">
      {/* Price Button */}
      <button className="btn-form-price px-14 py-5 bg-[#5D54A3] rounded-xl text-white">
        <p>
          <span className="font-bold text-white">Try it free 7 days</span> then
          $20/mo. thereafter
        </p>
      </button>
      {/* /Price Button */}
      {/* Form Container */}
      <div className="form-container flex flex-col p-5 bg-white gap-4 rounded-xl xl:p-10">
        {/* First Name */}
        <div className="flex flex-col items-center w-full gap-1">
          <div className="flex flex-row items-center w-full relative">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
              className={`outline-none focus:border-black px-4 py-3 w-full border border-gray-500 placeholder:font-semibold text-sm ${
                errorFirstName ? "border-red-500" : ""
              } placeholder:text-gray-500 rounded-md focus:border-black`}
              required
              autoComplete="off"
            />
            {errorVisible && errorFirstName && (
              <img className="absolute right-2" src={IconError} alt="Error" />
            )}
          </div>
          {errorVisible && errorFirstName && (
            <div className="text-end italic text-xs w-full text-[#e05962]">
              First Name cannot be empty
            </div>
          )}
        </div>
        {/* /First Name */}
        {/* Last Name */}
        <div className="flex flex-col items-center w-full gap-1">
          <div className="flex flex-row items-center w-full relative">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              className={`outline-none focus:border-black px-4 py-3 w-full border placeholder:font-semibold text-sm ${
                errorLastName ? "border-red-500" : "border-gray-500"
              } placeholder:text-gray-500 rounded-md`}
              required
              autoComplete="off"
            />
            {errorVisible && errorLastName && (
              <img className="absolute right-2" src={IconError} alt="Error" />
            )}
          </div>
          {errorVisible && errorLastName && (
            <div className="text-end italic text-xs w-full text-[#e05962]">
              Last Name cannot be empty
            </div>
          )}
        </div>
        {/* /Last Name */}
        {/* Email */}
        <div className="flex flex-col items-center w-full gap-1">
          <div className="flex flex-row items-center w-full relative">
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              className={`outline-none focus:border-black px-4 py-3 w-full border placeholder:font-semibold text-sm ${
                errorEmail ? "border-red-500" : "border-gray-500"
              } placeholder:text-gray-500 rounded-md`}
              required
              autoComplete="off"
            />
            {errorVisible && errorEmail && !isValidEmail(email) && (
              <img className="absolute right-2" src={IconError} alt="Error" />
            )}
          </div>
          {errorVisible && errorEmail && !isValidEmail(email) && (
            <div className="text-end italic text-xs w-full text-[#e05962]">
              Looks like this is not an email
            </div>
          )}
        </div>
        {/* /Email */}
        {/* Password */}
        <div className="flex flex-col items-center w-full gap-1">
          <div className="flex flex-row items-center w-full relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className={`outline-none focus:border-black px-4 py-3 w-full border placeholder:font-semibold text-sm ${
                errorPassword ? "border-red-500" : "border-gray-500"
              } placeholder:text-gray-500 rounded-md`}
              required
              autoComplete="off"
            />
            {errorVisible && errorPassword && (
              <img className="absolute right-2" src={IconError} alt="Error" />
            )}
          </div>
          {errorVisible && errorPassword && (
            <div className="text-end italic text-xs w-full text-[#e05962]">
              Password cannot be empty
            </div>
          )}
        </div>
        {/* /Password */}
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="border border-b-4 border-[#49AE84] py-4 rounded-md bg-[#37CC8A] text-white font-medium tracking-wider relative"
        >
          CLAIM YOUR FREE TRIAL
        </button>
        {/* /Submit Button */}
        {/*Footer Form */}
        <div className="w-full  justify-center flex flex-row">
          <p className="w-11/12 text-center text-xs text-gray-400">
            By clicking the button, you are agreeing to <br /> our{" "}
            <span className="font-bold text-red-400">Terms and Services</span>
          </p>
        </div>
        {/*Footer Form */}
      </div>
      {/* Form Container */}
    </div>
  );
}

{
  /* {} : Beginning of the component code - {/} = End of the component */
}

export default Form;
