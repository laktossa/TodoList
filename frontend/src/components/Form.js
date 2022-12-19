import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Form() {
  return (
    <div>
      <>
        <div className="px-16 mt-32 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-3">
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
            {window.location.pathname === "/signin" ? (
              <>
                <SignIn />
              </>
            ) : (
              <>
                <SignUp />
              </>
            )}
          </div>
        </div>
      </>
    </div>
  );
}
