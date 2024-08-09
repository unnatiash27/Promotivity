import React, { useState, useEffect } from "react";
import PomodoraTabs from "./pomodora/PomodoraTabs";
import PomodoraTop from "./pomodora/pomodoraTop";

const Pomodora = () => {
  const [times, setTimes] = useState({});
  const pomoConifg = (workTime, shortBreak, longBreak) => {
    setTimes({
      workTime: workTime,
      shortBreak: shortBreak,
      longBreak: longBreak,
    });
  };
  useEffect(() => {
    const place = window.location.pathname.replace("/", "");
    const time = JSON.parse(localStorage.getItem(place));
    if (time) {
      setTimes(time);
    } else {
      setTimes({
        workTime: 25,
        shortBreak: 5,
        longBreak: 15,
      });
      localStorage.setItem(
        place,
        JSON.stringify({ workTime: 25, shortBreak: 5, longBreak: 15 })
      );
    }
  }, []);
  return (
    <div className=" w-[50%] pomodora_section">
      <PomodoraTop pomoConifg={pomoConifg} />
      <hr className="mt-4" />
      <PomodoraTabs pomoTimes={times} />
    </div>
  );
};

export default Pomodora;
