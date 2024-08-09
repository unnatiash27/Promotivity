import React, { useState, useEffect } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { RxReload } from "react-icons/rx";

const pomodoraTimer = ({ time }) => {
  const [countDown, setCountDown] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCountDown((prevCountDown) => prevCountDown - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  useEffect(() => {
    if (time === "undefined") {
      setCountDown(0);
    } else {
      setCountDown(parseInt(time) * 60);
    }
  }, [time]);

  const handleStart = () => {
    setIsPaused(false);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsPaused(true);
    setIsRunning(false);
  };

  const handleReset = () => {
    setCountDown(time * 60);
    handleStop();
  };

  return (
    <div className=" flex justify-between items-center">
      <h1 className=" text-5xl font-semibold dark:text-[#f2f2f2]">
        {countDown === 0
          ? ""
          : `${
              Math.floor(countDown / 60) < 10
                ? "0" + Math.floor(countDown / 60)
                : Math.floor(countDown / 60)
            }:${countDown % 60 < 10 ? "0" + (countDown % 60) : countDown % 60}`}
      </h1>
      <div className="flex justify-center gap-3">
        {isPaused ? (
          <button onClick={handleStart} className="p-1 bg-teal-400 rounded">
            <BsFillPlayFill className="text-white" />
          </button>
        ) : (
          <button onClick={handleStop} className="p-1 bg-teal-400 rounded">
            <BsFillPauseFill className="text-white" />
          </button>
        )}
        <button onClick={handleReset} className="p-1 bg-teal-400 rounded">
          <RxReload className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default pomodoraTimer;
