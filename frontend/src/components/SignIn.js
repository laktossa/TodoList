import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../stores/slicers";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
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
    console.log(input);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signIn(input));
    // setInput({
    //   username: "",
    //   password: "",
    // });
  };

  return (
    <>
      <div className="mb-7">
        <h1 className="text-2xl">Sign In</h1>
      </div>
      <div className="flex flex-col gap-7">
        <form
          onSubmit={handleSignIn}
          action=""
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="flex flex-col">
              Username
              <input
                onChange={handleInput}
                type="text"
                name="username"
                placeholder="Your registered username"
                className="border py-4 px-5 rounded-lg mt-1 shadow-md"
              />
            </label>
            <label htmlFor="" className="flex flex-col w-full">
              Password
              <div className="w-full py-3 px-5 shadow-md border rounded-lg mt-1 flex items-center">
                <input
                  onChange={handleInput}
                  type="password"
                  name="password"
                  placeholder="*****"
                  autoComplete="off"
                  className="mt-1 w-[90%]"
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
            <button className="bg-blue-700 py-3 w-full text-white rounded-md">
              Sign In
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <h1>
            Don't have an account yet?{" "}
            <button onClick={() => navigate("/signup")}>
              <h1 className="hover:underline active:text-blue-300 text-blue-600">
                Sign Up
              </h1>
            </button>
          </h1>
        </div>
      </div>
    </>
  );
}
