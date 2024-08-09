import { createSlice } from "@reduxjs/toolkit";

const place = window.location.pathname.replace("/", "");

//mget todoList from localStorage with key: place + "/todos" not as a string
//but as an array of objects

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: JSON.parse(localStorage.getItem(place + "/todos")) || [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    removeAll: (state) => {
      state.todoList = [];
    },
    setCompleted: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
    movedList: (state, action) => {
      state.todoList = action.payload;
    },
    editTodo: (state, action) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            name: action.payload.name,
          };
        }
        return todo;
      });
    },
    setWholeList: (state, action) => {
      state.todoList = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  removeAll,
  setCompleted,
  movedList,
  editTodo,
  setWholeList,
} = todoSlice.actions;

export default todoSlice.reducer;
