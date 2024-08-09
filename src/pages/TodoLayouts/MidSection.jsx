import React from "react";
import Pomodora from "./Pomodora";
import Tolist from "./Tolist";

const MidSection = () => {
  return (
    <div className="flex flex-row gap-10 mt-10 mb-10 calendar_player_section">
      <Pomodora />
      <Tolist />
    </div>
  );
};

export default MidSection;
