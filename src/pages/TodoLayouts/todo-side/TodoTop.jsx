import React from "react";
import { RiDeleteBin2Line } from "react-icons/ri";
import Tooltip from "../../../Tooltip";
import { useDispatch } from "react-redux";
import { removeAll } from "../../../redux/slice/todoSlice";

const TodoTop = () => {
  const dispatch = useDispatch();

  const removeAllTodo = () => {
    const place = window.location.pathname.replace("/", "");
    localStorage.setItem(place + "/todos", JSON.stringify([]));
    dispatch(removeAll());
  };
  return (
    <div className=" flex justify-between">
      <h4 className="text-lg font-bold dark:text-gray-300">Todo</h4>
      <div className="p-1 bg-red-50 rounded cursor-pointer dark:bg-transparent">
        <Tooltip message="Delete All">
          <RiDeleteBin2Line
            className="text-xl text-red-600 dark:text-red-300"
            onClick={() => removeAllTodo()}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default TodoTop;
