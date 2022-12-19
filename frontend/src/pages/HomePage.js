import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories, getList } from "../stores/slicers";
import List from "../components/List";

export default function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [standard] = useState([
    { name: "Favourites", color: "#EB5757" },
    { name: "Groceries", color: "#27AE60" },
    { name: "Work", color: "#2F80ED" },
    { name: "Study", color: "#F2994A" },
    { name: "Sports", color: "#9B51E0" },
  ]);
  const [bg, setBg] = useState("");
  const [list] = useState([
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

  const signOut = () => {
    localStorage.removeItem("access_token");
    navigate("/signin");
  };

  useEffect(() => {
    dispatch(getList());
    dispatch(getCategories());
  }, []);

  return (
    <>
      <div className="absolute flex flex-col justify-end h-full">
        <div className="w-28 h-24 bg-gradient-to-r from-[#F8AB48] via-[#EB1F6F] to-[#EB1F6F] rounded-tr-full blur-[60px] "></div>
      </div>
      <div className="absolute flex flex-row-reverse px-8 w-full">
        <button
          onClick={signOut}
          className="z-10 absolute w-32 h-32 hover:scale-110 "
        >
          <h1 className="font-bold text-2xl text-text">Sign Out</h1>
        </button>
        <div className="bg-red-400 blur-[60px] w-36 h-36 rounded-bl-full flex justify-center items-center " />
      </div>
      <div className="grid grid-cols-12 divide-x-2 h-full">
        <div className="col-start-1 col-end-4">
          <div className="flex items-center justify-end mr-10 h-full">
            <div className="h-[80%] w-[70%] flex justify-center ">
              <div className="w-[90%] p-3">
                <div className="flex flex-col gap-5">
                  <button className="hover:scale-110 duration-700">
                    <h1 className="font-extrabold text-left text-text text-3xl">
                      All Tasks
                    </h1>
                  </button>
                  {standard.map((e, i) => (
                    <>
                      <h1
                        key={i}
                        className="text-3xl hover:translate-x-4 duration-500   "
                      >
                        <button>{e.name}</button>
                      </h1>
                    </>
                  ))}
                  <h1 className="text-3xl">
                    <button className="text-[#ABABAB] hover:scale-110 duration-700">
                      +New category
                    </button>
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
                <h1 className="text-5xl font-extrabold text-text">All Tasks</h1>
              </div>
              <div className="mb-16">
                <form action="">
                  <div className="flex flex-row gap-1">
                    <input
                      type="text"
                      placeholder="Add a new task"
                      className="w-[20%] focus:w-[70%] duration-1000 py-3 px-4 text-2xl rounded-lg bg-[#E1DEDE] outline-0"
                    />
                    <select
                      name=""
                      id=""
                      className="appearance-none px-4 bg-[#E1DEDE] text-text rounded-lg outline-0 w-[10%]"
                    >
                      {standard.map((e, i) => (
                        <>
                          <option
                            key={i}
                            value={e.color}
                            style={{ background: e.color }}
                          >
                            {e.name}
                          </option>
                        </>
                      ))}
                    </select>
                    <div className="w-[10%] bg-blue-700 px-3 text-white rounded-xl flex justify-center">
                      <button className="">
                        <h1 className="text-center w-full">Submit</h1>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex flex-col gap-4">
                {list.map((e, i) => (
                  <>
                    <List key={i} item={e} />
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
