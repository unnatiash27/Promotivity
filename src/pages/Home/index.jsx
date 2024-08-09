import React from "react";
import Home from "./Home";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

const index = () => {
  return (
    <div className="flex flex-col min-h-[95vh]">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default index;
