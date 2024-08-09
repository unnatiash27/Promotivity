import React from "react";
import { BsMoonStars } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import Logo from "../../assets/logo-light.svg";
import Tooltip from "../../Tooltip";
import { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    console.log(localTheme);
    localTheme ? setTheme(localTheme) : setTheme("light");
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <div className=" flex justify-between">
      <div>
        <img src={Logo} alt="Logo" className="w-10 cursor-pointer" />
      </div>
      <div>
        {theme === "light" ? (
          <Tooltip message="Dark Mode">
            <div className=" p-1  rounded cursor-pointer">
              <BsMoonStars
                className=" text-gray-500 hover:text-teal-500"
                onClick={toggleTheme}
              />
            </div>
          </Tooltip>
        ) : (
          <Tooltip message="Light Mode">
            <div className=" p-1 rounded cursor-pointer">
              <BiSun
                className=" text-gray-500 hover:text-teal-500"
                onClick={toggleTheme}
              />
            </div>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default Header;
