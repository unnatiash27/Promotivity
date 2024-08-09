import React from "react";
import { Modal } from "antd";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { editTodo } from "../../../redux/slice/todoSlice";
import { useState } from "react";

const EditTodo = ({ isModalOpen, setIsModalOpen, todo }) => {
  const [todoName, setTodoName] = useState(todo.name);

  const dispatch = useDispatch();
  const place = window.location.pathname.replace("/", "");
  const handleOk = () => {
    dispatch(editTodo({ id: todo.id, name: todoName }));
    let todos = JSON.parse(localStorage.getItem(place + "/todos"));
    todos.map((item) => {
      if (item.id === todo.id) {
        item.name = todoName;
      }
      return item;
    });
    localStorage.setItem(place + "/todos", JSON.stringify(todos));

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const footer = (
    <div className="flex justify-between mt-7">
      <button
        className=" text-teal-500 hover:bg-teal-50 p-2 pr-4  rounded pl-4"
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button
        className=" text-white p-2 pr-4  rounded pl-4 bg-teal-400"
        onClick={handleOk}
      >
        Save
      </button>
    </div>
  );
  return (
    <Modal
      width={400}
      title="Edit Todo"
      open={isModalOpen}
      onSave={handleOk}
      onCancel={handleCancel}
      okText="Save"
      cancelText="Cancel"
      footer={footer}
      closeIcon={
        <RxCross2 className=" hover:bg-transparent text-red-600 ml-0 h-[16px] w-[16px]" />
      }
    >
      <input
        className="w-full border p-1 rounded hover:border-teal-500 outline-none focus:border-teal-500"
        type="text"
        onChange={(e) => {
          setTodoName(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleOk();
          }
        }}
        placeholder="Todo Name..."
        defaultValue={todoName}
      />
      {todoName.length <= 0 ? (
        <span className="text-xs text-red-500">Task can not be Empty</span>
      ) : null}
    </Modal>
  );
};

export default EditTodo;
