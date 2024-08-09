import React from "react";
import TopSection from "../TodoLayouts/TopSection";
import MidSection from "../TodoLayouts/MidSection";
import Playlist from "../Layouts/Playlist/Playlist";

const Todo = () => {
  return (
    <div className="flex flex-col">
      <TopSection />
      <MidSection />
      <Playlist />
    </div>
  );
};

export default Todo;
