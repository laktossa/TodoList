import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../stores/slicers";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    let newInput = {
      ...input,
      [name]: value,
    };
    setInput(newInput);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp(input));
    setInput({
      name: "",
      phoneNumber: "",
      email: "",
      username: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <>
      <div className="mb-7">
        <h1 className="text-2xl">Sign Up</h1>
      </div>
      <div className="flex flex-col gap-7">
        <form onSubmit={handleSignUp} className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="flex flex-col">
              Name
              <input
                onChange={handleInput}
                type="text"
                name="name"
                placeholder="Your name"
                className="border py-4 px-5 rounded-lg mt-1 shadow-md hover:scale-110 duration-500"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Phone Number
              <input
                onChange={handleInput}
                type="text"
                name="phoneNumber"
                placeholder="+62"
                className="border py-4 px-5 rounded-lg mt-1 shadow-md hover:scale-110 duration-500"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Email
              <input
                onChange={handleInput}
                type="email"
                name="email"
                placeholder="example@mail.com"
                className="border py-4 px-5 rounded-lg mt-1 shadow-md hover:scale-110 duration-500"
              />
            </label>
            <label htmlFor="" className="flex flex-col">
              Username
              <input
                onChange={handleInput}
                type="text"
                name="username"
                placeholder="Your registered username"
                className="border py-4 px-5 rounded-lg mt-1 shadow-md hover:scale-110 duration-500"
              />
            </label>
            <label htmlFor="" className="flex flex-col w-full">
              Password
              <div className="w-full py-3 px-5 shadow-md border rounded-lg mt-1 flex items-center border-hidden hover:scale-110 duration-500">
                <input
                  onChange={handleInput}
                  type="password"
                  name="password"
                  placeholder="*****"
                  autoComplete="off"
                  className="mt-1 w-[90%] flex outline-none"
                />
                <button className="w-[10%] flex flex-row-reverse">
                  <div className="w-7 h-7 flex items-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </label>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-700 hover:bg-blue-500 duration-500 py-3 w-full text-white rounded-md">
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <h1>
            Already have an account?{" "}
            <button onClick={() => navigate("/")}>
              <h1 className="hover:underline active:text-blue-300 text-blue-600">
                Sign In
              </h1>
            </button>
          </h1>
        </div>
      </div>
    </>
  );
}
