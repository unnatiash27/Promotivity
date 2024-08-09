import React from "react";

const TopSection = () => {
  const place = window.location.pathname.split("/")[1];
  const getGreetings = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return "☀️ Good Morning";
    } else if (hours < 18) {
      return "🌤️ Good Afternoon";
    } else {
      return "🌔 Good Evening";
    }
  };
  const getDate = () => {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    return `${month} ${day}th`;
  };

  const getTime = () => {
    const date = new Date();
    // convert to 12 hour format
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const ampm = date.getHours() < 12 || date.getHours() === 24 ? "AM" : "PM";
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div className=" flex flex-col mt-6">
      <h1 className="text-3xl font-semibold text-gray-700 dark:text-teal-300">
        {place}'s &nbsp; place
      </h1>
      <div className="flex justify-between mt-5">
        <p className="text-gray-500 text-sm">{getGreetings()}</p>
        <p className="text-gray-500 text-sm">
          {getDate()}, {getTime()}
        </p>
      </div>
    </div>
  );
};

export default TopSection;
