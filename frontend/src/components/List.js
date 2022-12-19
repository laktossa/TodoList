import { useDispatch } from "react-redux";
import checks from "../assets/Vector.png";
import { changeStatus } from "../stores/slicers";
import Tag from "./Tag";
export default function List({ item }) {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(changeStatus(item.id));
  };
  return (
    <>
      <div className="flex flex-row gap-3 ">
        <button className="border-2 border-red-400 rounded-2xl flex justify-center items-center w-9 h-9 hover:scale-125 duration-500">
          {item.status ? (
            <>
              <img src={checks} alt="" className="w-8 -mt-2 ml-1 " />
            </>
          ) : (
            <></>
          )}
        </button>
        {item.status === true ? (
          <>
            <s className="text-3xl text-red-400">{item.task}</s>
          </>
        ) : (
          <>
            <h1 className="text-3xl">{item.task}</h1>
          </>
        )}
        <Tag name={item.category.name} color={item.category.color} />
      </div>
    </>
  );
}
