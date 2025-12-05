import React from "react";
import DecorativeSwoops from "./decorativeSwoops";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center">
      <DecorativeSwoops />
      <div className="relative flex justify-between items-baseline gap-8 w-full max-w-[880px] px-4 pb-12">
        <div className="max-w-80">
          <Logo />

          <p className="max-w-[18rem] text-sm text-amber-50 mt-6">
            Blog template created by Josh W. Comeau. Check out The Joy of React
            to learn how to build dynamic React apps like this one!
          </p>
        </div>

        <div>
          <h5 className="text-amber-50 text-2xl font-bold">Links</h5>
          <ul className="flex flex-col gap-2 text-amber-50 font-bold mt-6">
            <li>
              <a href="#">RSS feed</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
