import React from "react";
import DecorativeSwoops from "./decorativeSwoops";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center">
      <DecorativeSwoops />
      <div className="relative flex justify-between items-baseline gap-8 w-full max-w-[880px] px-4 pb-12">
        <div className="max-w-80">
          <h5 className="text-2xl font-bold">Intro</h5>

          <p className="max-w-[18rem] text-sm font-medium mt-6">
            Hi, I&apos;m Sam!
            <br />I enjoy programming. Playing around with code, discovering new
            tech, and building fun and useful projects are my favorite.
          </p>
        </div>

        <div>
          <h5 className="text-2xl font-bold">Links</h5>
          <ul className="flex flex-col gap-2 font-bold mt-6">
            <li>
              <a target="_blank" href="mailto:xlin67948@gmail.com">E-mail</a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Lam-Big-Water">GitHub</a>
            </li>
            <li>
              <a target="_blank" href="https://sam-portfolio-swart.vercel.app/en">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
