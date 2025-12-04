import React from "react";
import { Rss, Sun, Moon } from "react-feather";
import HeaderLogo from "./logo";

const Header = () => {
  return (
    <div className="relative w-full max-w-[880px] m-auto px-4 h-20 flex justify-between items-center text-amber-50 font-medium">
      <HeaderLogo />

      <div className="flex gap-4 items-center">
        <a
          href="#"
          className="bg-transparent w-12 h-12 flex justify-center items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-black"
        >
          <Rss className="block" />
        </a>
        <button className="bg-transparent w-12 h-12 flex justify-center items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-black">
          <Sun />
        </button>
      </div>
    </div>
  );
};

export default Header;
