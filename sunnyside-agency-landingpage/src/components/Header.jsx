import React from "react";
import Navbar from "./Navbar";
import arrowDown from "../../images/icon-arrow-down.svg";
const Header = () => {
  return (
    <header className="bg-header-mobile sm:bg-header bg-center h-screen bg-cover bg-no-repeat">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-8 sm:gap-16 py-16">
        <h1 className="text-center font-fraunces font-black text-neutral-white text-4xl sm:text-5xl tracking-[0.5rem] sm:tracking-[0.75rem]">
          WE ARE CREATIVES
        </h1>
        <div>
          <img src={arrowDown} />
        </div>
      </div>
    </header>
  );
};

export default Header;
