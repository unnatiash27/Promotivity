import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-between font-light text-xs items-center pt-3 pb-3 mt-auto">
      <div className=" flex gap-5 dark:text-[#f2f2f2]">
        <Link to="/">Home</Link>
        <a href="#">Feedback</a>
      </div>
      <div className="flex gap-5">
        <a href="#" className="p-2 bg-teal-400 text-white  rounded">
          <FiGithub />
        </a>
        <a href="#" className="p-2 bg-teal-400 text-white rounded">
          <FiLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
