import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <div className="px-16 mt-32 flex flex-col gap-10">
          <div>
            <div className="flex flex-row gap-2">
              <h1 className="text-2xl">Welcome to To Do List</h1>
              <img
                src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/72x72/1f44b.png"
                alt=""
                className="w-10 h-10"
              />
            </div>
            <h1 className="text-xl">
              Please sign-in to your account, and start manage further
            </h1>
          </div>
          <div>
            {window.location.pathname === "/" ? (
              <>
                <div className="mb-7">
                  <h1 className="text-2xl">Sign In</h1>
                </div>
                <div className="flex flex-col gap-7">
                  <form action="" className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                      <label htmlFor="" className="flex flex-col">
                        Username
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Your registered username"
                          className="border py-4 px-5 rounded-lg mt-1 shadow-md"
                        />
                      </label>
                      <label htmlFor="" className="flex flex-col w-full">
                        Password
                        <div className="w-full py-3 px-5 shadow-md border rounded-lg mt-1 flex items-center">
                          <input
                            type="password"
                            name=""
                            id=""
                            placeholder="*****"
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
                      <a
                        href="/signup"
                        className="hover:underline active:text-blue-300 text-blue-600"
                      >
                        Sign Up
                      </a>
                    </h1>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-7">
                  <h1 className="text-2xl">Sign Up</h1>
                </div>
                <div className="flex flex-col gap-7">
                  <form action="" className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                      <label htmlFor="" className="flex flex-col">
                        Name
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Your name"
                          className="border py-4 px-5 rounded-lg mt-1 shadow-md"
                        />
                      </label>
                      <label htmlFor="" className="flex flex-col">
                        Phone Number
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="+62"
                          className="border py-4 px-5 rounded-lg mt-1 shadow-md"
                        />
                      </label>
                      <label htmlFor="" className="flex flex-col">
                        Email
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="example@mail.com"
                          className="border py-4 px-5 rounded-lg mt-1 shadow-md"
                        />
                      </label>
                      <label htmlFor="" className="flex flex-col">
                        Username
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Your registered username"
                          className="border py-4 px-5 rounded-lg mt-1 shadow-md"
                        />
                      </label>
                      <label htmlFor="" className="flex flex-col w-full">
                        Password
                        <div className="w-full py-3 px-5 shadow-md border rounded-lg mt-1 flex items-center">
                          <input
                            type="password"
                            name=""
                            id=""
                            placeholder="*****"
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
                      <button
                        onClick={() => navigate("/home")}
                        className="bg-blue-700 py-3 w-full text-white rounded-md"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                  <div className="flex justify-center">
                    <h1>
                      Already have an account?{" "}
                      <a
                        href="/"
                        className="hover:underline active:text-blue-300 text-blue-600"
                      >
                        Login
                      </a>
                    </h1>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    </div>
  );
}
