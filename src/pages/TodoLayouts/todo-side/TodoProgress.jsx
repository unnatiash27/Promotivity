import React from "react";
import { Progress } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoProgress = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const place = window.location.pathname.replace("/", "");
    const currentTodos = JSON.parse(localStorage.getItem(place + "/todos"));
    if (currentTodos) {
      setTodos(currentTodos);
    }
  }, []);
  const completed = todoList.filter((todo) => todo.completed === true);
  const progress = Math.round((completed.length / todoList.length) * 100);

  return (
    <div className=" mt-2">
      <div className="flex justify-between font-light text-xs dark:text-[#9e9e9e]">
        <p className="text-xs">Progress</p>
        <p className="text-xs">{todoList.length > 0 ? progress : "0"}%</p>
      </div>
      <Progress
        percent={progress}
        size="small"
        showInfo={false}
        strokeColor={"#26a69a"}
        trailColor={"#e2e2e2"}
        style={{ height: "5px" }}
      />
      <div className="flex justify-end font-light text-xs ">
        <p className="text-xs dark:text-[#9e9e9e]">
          {completed.length}
          {"/"}
          {todoList.length} completed
        </p>
      </div>
    </div>
  );
};

export default TodoProgress;
