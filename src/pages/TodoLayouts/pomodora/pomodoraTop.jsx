import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import PomodoraSetting from "./pomodoraSetting";
import Tooltip from "../../../Tooltip";

const PomodoraTop = ({ pomoConifg }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const PopSetting = () => {
    return (
      <PomodoraSetting
        pomoConifg={pomoConifg}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    );
  };

  return (
    <div>
      <div className=" flex justify-between items-center">
        <h4 className="text-lg font-bold dark:text-gray-300">Pomodora</h4>
        <div className="p-[4px] bg-slate-100 rounded cursor-pointer">
          <Tooltip message="Setting">
            <AiOutlineSetting
              className="text-xl dark:text-gray-300"
              onClick={showModal}
            />
          </Tooltip>
          <PopSetting />
        </div>
      </div>
    </div>
  );
};

export default PomodoraTop;
