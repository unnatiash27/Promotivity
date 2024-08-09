import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Tooltip from "../../../Tooltip";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  setCompleted,
  movedList,
} from "../../../redux/slice/todoSlice";
import { MdOutlineDragIndicator } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import EditTodo from "./EditTodo";

const TodoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTask, setEditTask] = useState({});

  const showModal = (todo) => {
    setEditTask(todo);
    console.log(todo);
    setIsModalOpen(true);
  };
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);

  const [todos, setTodos] = useState(todoList);
  const place = window.location.pathname.slice(1);

  const handleRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem(place + "/todos", JSON.stringify(newTodos));
    dispatch(removeTodo(id));
  };

  const moveTaskOrder = (sourceIndex, destinationIndex) => {
    const newTodos = [...todos];
    const [removed] = newTodos.splice(sourceIndex, 1);
    newTodos.splice(destinationIndex, 0, removed);
    setTodos(newTodos);
    localStorage.setItem(place + "/todos", JSON.stringify(newTodos));
    dispatch(movedList(newTodos));
    console.log(newTodos);
  };

  useEffect(() => {
    const currentTodos = JSON.parse(localStorage.getItem(place + "/todos"));
    if (currentTodos) {
      setTodos(currentTodos);
    }
  }, []);

  const renderTodo = (todo, index) => {
    return (
      <Draggable key={todo.id} draggableId={todo.id} index={index}>
        {(provided) => (
          <div
            className="flex items-center pt-3"
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div {...provided.dragHandleProps}>
              <MdOutlineDragIndicator className="text-gray-400 mr-2 cursor-grabbing" />
            </div>
            <input
              type="checkbox"
              className="mr-2"
              checked={todo.completed}
              onChange={() => {
                const newTodos = todos.map((ele) => {
                  if (ele.id === todo.id) {
                    let newTodo = { ...ele };
                    newTodo.completed = !newTodo.completed;
                    return newTodo;
                  }
                  return ele;
                });
                setTodos(newTodos);
                localStorage.setItem(
                  place + "/todos",
                  JSON.stringify(newTodos)
                );
                dispatch(setCompleted(todo.id));
              }}
            />
            <p
              className={`${
                todo.completed ? "line-through" : ""
              } text-sm text-gray-600 dark:text-[#9e9e9e]`}
            >
              {todo.name}
            </p>
            <div className="flex gap-4 ml-auto">
              <Tooltip message="Edit">
                <AiOutlineEdit
                  className="text-gray-400 cursor-pointer hover:text-teal-400"
                  onClick={() => showModal(todo)}
                />
              </Tooltip>
              {isModalOpen && (
                <EditTodo
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  todo={editTask}
                />
              )}
              <Tooltip message="Delete">
                <RiDeleteBin6Line
                  className="text-gray-400 cursor-pointer hover:text-red-400"
                  onClick={() => handleRemove(todo.id)}
                />
              </Tooltip>
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <div className="mt-5 flex flex-col">
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          moveTaskOrder(source.index, destination?.index || 0)
        }
      >
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="characters"
            >
              {todoList.length > 0 &&
                todoList.map((todo, index) => {
                  return renderTodo(todo, index);
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
