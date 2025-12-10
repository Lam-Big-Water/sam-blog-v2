"use client"
import React from "react";

 const PasswordToggle = ({minimum = 8}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const safety = inputValue.length >= minimum;
  return (
    <form className="flex flex-col">
      <label htmlFor="password">Password: <span className={`${safety ? "text-green-300" : "text-red-500"}`}>{inputValue.length}</span></label>
      <div className="relative">
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a password" className=" border-2 border-gray-400 bg-black   py-2 px-6 rounded-md " type={isVisible ? "text" : "password"} id="password" />
      <button onClick={(e) => {
        e.preventDefault();
        setIsVisible(!isVisible);
      }} className="absolute top-3 left-50 w-6 h-6 cursor-pointer text-red-500">◉</button>
      </div>
      <button className={`w-fit font-bold rounded-md p-2 text-lg text-black bg-text-dark`}>SUBMIT</button>
    </form>
  )
}

export default PasswordToggle