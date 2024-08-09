import React from "react";
import TodoTop from "./todo-side/TodoTop";
import TodoCreate from "./todo-side/TodoCreate";
import TodoList from "./todo-side/TodoList";
import TodoProgress from "./todo-side/TodoProgress";
const Tolist = () => {
  return (
    <div className="w-[50%] todo_section">
      <TodoTop />
      <hr className="mt-4" />
      <TodoProgress />
      <TodoList />
      <TodoCreate />
    </div>
  );
};

export default Tolist;
