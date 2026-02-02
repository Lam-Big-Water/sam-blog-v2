"use client";

import React from "react";
import Link from "next/link";
import { Codepen, Sun, Moon } from "react-feather";
import Logo from "./logo";
import Cookie from "js-cookie";

import { COLOR_THEME_COOKIE_NAME } from "../constants";

const Header = ({initialTheme}: {initialTheme: "light" | "dark"}) => {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick () {
    
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    Cookie.set(COLOR_THEME_COOKIE_NAME, nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    root.classList.remove(theme);
    root.classList.add(nextTheme);
  }
  return (
    <div className="relative w-full max-w-[880px] m-auto px-4 h-20 flex justify-between items-center font-medium">
      <Logo />

      <div className="flex gap-4 items-center">
        <Link className="bg-transparent w-12 h-12 flex justify-center items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-decorative-100" href="/showroom"><Codepen size={24} strokeWidth={2}/></Link>
        <button onClick={handleClick} className="bg-transparent w-12 h-12 flex justify-center items-center rounded-full cursor-pointer transition-colors duration-200 hover:bg-decorative-100">
          {theme === "light" ? <Sun size={24} strokeWidth={2.5}/> : <Moon size={24} strokeWidth={2.5}/>}
        </button>
      </div>
    </div>
  );
};

export default Header;
