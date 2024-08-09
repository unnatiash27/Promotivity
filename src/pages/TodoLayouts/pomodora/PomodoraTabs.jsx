import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import PomodoraTimer from "./PomodoraTimer";

const PomodoraTabs = ({ pomoTimes }) => {
  const [times, setTimes] = useState([]);
  const data = [
    {
      label: "Work Time",
      value: "worktime",
      desc: `${pomoTimes.workTime}`,
    },
    {
      label: "Short Break",
      value: "shortbreak",
      desc: `${pomoTimes.shortBreak}`,
    },

    {
      label: "Long Break",
      value: "longbreak",
      desc: `${pomoTimes.longBreak}`,
    },
  ];

  const place = window.location.pathname.replace("/", "");
  useEffect(() => {
    const time = JSON.parse(localStorage.getItem(place));
    if (time) {
      setTimes(time);
    } else {
      setTimes({
        workTime: 25,
        shortBreak: 5,
        longBreak: 15,
      });
      localStorage.setItem(place, JSON.stringify(times));
    }
  }, []);

  const renderTabPanel = (value, time) => {
    return (
      <TabPanel key={value} value={value}>
        <PomodoraTimer time={time} value={value} />
      </TabPanel>
    );
  };

  return (
    <div className="w-full mt-3">
      <Tabs id="custom-animation" value="worktime">
        <TabsHeader className="dark:bg-[#bdbdbd]">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              <p className="text-gray-800 text-sm">{label}</p>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => {
            return renderTabPanel(value, desc);
          })}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default PomodoraTabs;
