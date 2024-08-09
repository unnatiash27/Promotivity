import React, { useEffect, useState } from "react";
import { InputNumber, Modal } from "antd";
import { RxCross2 } from "react-icons/rx";

const PomodoraSetting = ({ isModalOpen, setIsModalOpen, pomoConifg }) => {
  const [workTime, setWorkTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);

  const handleOk = () => {
    pomoConifg(workTime, shortBreak, longBreak);
    const place = window.location.pathname.slice(1);
    localStorage.setItem(
      place,
      JSON.stringify({
        workTime: workTime,
        shortBreak: shortBreak,
        longBreak: longBreak,
      })
    );

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const footer = (
    <div className="flex justify-between">
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

  useEffect(() => {
    const place = window.location.pathname.slice(1);
    const currentSetting = JSON.parse(localStorage.getItem(place));
    if (currentSetting) {
      setWorkTime(currentSetting.workTime);
      setShortBreak(currentSetting.shortBreak);
      setLongBreak(currentSetting.longBreak);
    } else {
      localStorage.setItem(
        place,
        JSON.stringify({
          workTime: 25,
          shortBreak: 5,
          longBreak: 10,
        })
      );
    }
  }, []);
  return (
    <Modal
      width={400}
      title="Pomodora Setting"
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
      <div className="flex flex-col gap-4 justify-start">
        <div className=" flex flex-col">
          <p>Work Time</p>
          <span className="text-xs text-gray-500">in minutes</span>
          <InputNumber
            min={0}
            defaultValue={workTime}
            value={workTime}
            step={5}
            onStep={(value) => setWorkTime(value)}
            keyboard={true}
            className=" w-full hover:border-teal-500 focus-visible:border-cyan-500"
          />
        </div>
        <div className=" flex flex-col">
          <p>Short Break</p>
          <span className="text-xs text-gray-500">in minutes</span>
          <InputNumber
            min={0}
            max={60}
            onStep={(value) => setShortBreak(value)}
            step={5}
            defaultValue={shortBreak}
            value={shortBreak}
            keyboard={true}
            className=" w-full hover:border-teal-500"
          />
        </div>
        <div className=" flex flex-col">
          <p>Long Break</p>
          <span className="text-xs text-gray-500">in minutes</span>

          <InputNumber
            min={0}
            max={60}
            step={5}
            onStep={(value) => setLongBreak(value)}
            defaultValue={longBreak}
            value={longBreak}
            keyboard={true}
            className=" w-full hover:border-teal-500"
          />
        </div>
      </div>
    </Modal>
  );
};

export default PomodoraSetting;
