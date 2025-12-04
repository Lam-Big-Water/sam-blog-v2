import React from "react";
import DecorativeSwoops from "./decorativeSwoops";

const Footer = () => {
  return (
    <footer className="relative w-full pb-8">
      <DecorativeSwoops />
      <div className="relative flex justify-between items-start ">
        <div className="max-w-80">
          <h4 className="text-2xl text-amber-50 font-black pb-8">
            Bits & Bytes
          </h4>

          <p className="text-amber-50 font-bold">
            Blog template created by Josh W. Comeau. Check out The Joy of React
            to learn how to build dynamic React apps like this one!
          </p>
        </div>

        <div>
          <h5 className="text-amber-50 text-2xl font-bold pb-4">Links</h5>
          <ul className="flex flex-col gap-2 text-amber-50 font-bold">
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
