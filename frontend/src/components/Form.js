export default function Form() {
  return (
    <div>
      {window.location.pathname === "/login" ? (
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
              <div className="mb-7">
                <h1 className="text-2xl">Sign In</h1>
              </div>
              <div>
                <form action="" className="flex flex-col gap-10">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="" className="flex flex-col">
                      Username
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Your registered username"
                        className="border py-3 px-4 rounded-lg mt-1 shadow-md"
                      />
                    </label>
                    <label htmlFor="" className="flex flex-col">
                      Password
                      <input
                        type="password"
                        name=""
                        id=""
                        placeholder="*****"
                        className="border py-3 px-4 rounded-lg mt-1 shadow-md"
                      />
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-blue-700 py-3 w-full text-white rounded-md">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <h1>SignUp</h1>
          </div>
        </>
      )}
    </div>
  );
}
