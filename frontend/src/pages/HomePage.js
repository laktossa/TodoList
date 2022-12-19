import { useState } from "react";
import checks from "../assets/Vector.png";

export default function HomePage() {
  const [itenary, setitenary] = useState([
    { name: "Favourites", color: "#EB5757" },
    { name: "Groceries", color: "#27AE60" },
    { name: "Work", color: "#2F80ED" },
    { name: "Study", color: "#F2994A" },
    { name: "Sports", color: "#9B51E0" },
  ]);

  const [list, setList] = useState([
    {
      task: "Buy Bananas for the pancakes",
      category: { name: "Groceries", color: "#27AE60" },
      status: true,
    },
    {
      task: "Go to the Gym",
      category: { name: "Sports", color: "#9B51E0" },
      status: true,
    },
    {
      task: "Prepare roadmap for MVP",
      category: { name: "Work", color: "#2F80ED" },
      status: false,
    },
    {
      task: "Read chapter 3 from Math book",
      category: { name: "Study", color: "#F2994A" },
      status: false,
    },
    {
      task: "Call Peter",
      category: { name: "Work", color: "#2F80ED" },
      status: false,
    },
  ]);

  return (
    <>
      <div className="absolute flex flex-col justify-end h-full">
        <div className="w-28 h-24 bg-gradient-to-r from-[#F8AB48] via-[#EB1F6F] to-[#EB1F6F] rounded-tr-full blur-[60px]"></div>
      </div>
      <div className="grid grid-cols-12 divide-x-2 h-full">
        <div className="col-start-1 col-end-4">
          <div className="flex items-center justify-end mr-10 h-full">
            <div className="h-[80%] w-[70%] flex justify-center ">
              <div className="w-[90%] p-3">
                <div className="flex flex-col gap-5">
                  <h1 className="font-extrabold text-3xl">All Tasks </h1>
                  {itenary.map((e) => (
                    <>
                      <h1 className="text-3xl hover:bg-red-200  ">
                        <button>{e.name}</button>
                      </h1>
                    </>
                  ))}
                  <h1 className="text-3xl">
                    <button className="text-[#ABABAB]">+New category</button>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-4 col-end-13">
          <div className="flex items-center ml-10 h-full">
            <div className="h-[90%] w-[80%]">
              <div className="mb-10">
                <h1 className="text-5xl font-extrabold">All Tasks</h1>
              </div>
              <div className="mb-16">
                <form action="">
                  <input
                    type="text"
                    placeholder="Add a new task"
                    className="w-full py-3 px-4 text-2xl rounded-lg bg-[#E1DEDE]"
                  />
                </form>
              </div>
              <div className="flex flex-col gap-4">
                {list.map((e) => (
                  <>
                    <div className="flex flex-row gap-3">
                      <button className="border-2 border-red-400 rounded-2xl flex justify-center items-center w-9 h-9">
                        {e.status === true ? (
                          <>
                            <img
                              src={checks}
                              alt=""
                              className="w-8 absolute -mt-2 ml-1"
                            />
                          </>
                        ) : (
                          <></>
                        )}
                      </button>
                      {e.status === true ? (
                        <>
                          <s className="text-3xl text-red-400">{e.task}</s>
                        </>
                      ) : (
                        <>
                          <h1 className="text-3xl">{e.task}</h1>
                        </>
                      )}

                      <div className="border px-2 rounded-xl bg-red-200 flex items-center">
                        <h1>{e.category.name}</h1>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
