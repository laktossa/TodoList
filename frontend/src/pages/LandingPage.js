import { Outlet } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="absolute w-[30%] flex flex-col justify-between h-full">
        <div className="w-[90%] h-[7%] rounded-b-full blur-[80px] bg-gradient-to-r from-[#EB5757] to-[#9747FF]"></div>
        <div className="w-[40%] h-[20%] rounded-tr-full blur-[90px] bg-gradient-to-r from-[#F8AB48] via-[#EB1F6F] to-[#EB1F6F]"></div>
      </div>
      <div className="grid grid-cols-12 h-full ">
        <div className="col-start-1 col-end-9 bg-[#FAFAFA]">
          <div className="m-32">
            <div className="flex flex-col justify-center animate-bounce">
              <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EB5757] to-[#9B51E0] text-9xl w-fit select-none">
                TO DO
              </h1>
              <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EB5757] to-[#9B51E0] text-9xl w-fit select-none">
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
