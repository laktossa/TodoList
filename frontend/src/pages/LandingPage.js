import { Outlet } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="grid grid-cols-12 border h-full">
        <div className="col-start-1 col-end-9 bg-[#FAFAFA]">
          <div className="m-32">
            <div className="flex flex-col">
              <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EB5757] to-[#9B51E0] text-9xl w-fit">
                TO DO
              </h1>
              <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EB5757] to-[#9B51E0] text-9xl w-fit">
                LIST
              </h1>
            </div>
          </div>
        </div>
        <div className="col-start-9 col-end-13 ">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
