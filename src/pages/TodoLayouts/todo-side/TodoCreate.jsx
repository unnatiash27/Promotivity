import React, { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import Tooltip from "../../../Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../redux/slice/todoSlice";

const TodoCreate = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const [todo, setTodo] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  const handleAddTodo = () => {
    const task = {
      id: uuidv4(),
      name: todoInput,
      completed: false,
    };
    if (todoInput === "") {
      return;
    }
    console.log("clicked");
    dispatch(addTodo(task));

    const place = window.location.pathname.replace("/", "");

    setTodo([...todo, task]);

    localStorage.setItem(place + "/todos", JSON.stringify([...todo, task]));
    setTodoInput("");
  };

  useEffect(() => {
    const place = window.location.pathname.replace("/", "");
    const todo = JSON.parse(localStorage.getItem(place + "/todos"));
    if (todo) {
      setTodo(todo);
    } else {
      localStorage.setItem(place + "/todos", JSON.stringify([]));
    }
  }, []);
  return (
    <div className="flex gap-4 mt-4 justify-between ">
      <input
        type="text"
        id="todo_input"
        placeholder="Add a new todo..."
        autoComplete="off"
        onKeyPress={handleOnKeyPress}
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="w-[90%] p-2 border-b border-gray-300 outline-none text-sm dark:bg-transparent dark:text-[#f2f2f2]"
      />
      <Tooltip message="Add">
        <IoIosAdd
          className="bg-teal-400 rounded text-white h-[22px] w-[22px] self-end cursor-pointer"
          onClick={handleAddTodo}
        />
      </Tooltip>
    </div>
  );
};

export default TodoCreate;
