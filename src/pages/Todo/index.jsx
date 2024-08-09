import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Todo from "./Todo";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWholeList } from "../../redux/slice/todoSlice";

const index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const place = window.location.pathname.replace("/", "");
    const currentTodos = JSON.parse(localStorage.getItem(place + "/todos"));
    if (currentTodos) {
      dispatch(setWholeList(currentTodos));
    } else {
      dispatch(setWholeList([]));
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
};

export default index;
