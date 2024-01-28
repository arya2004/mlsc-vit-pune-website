import React, { useState, useEffect } from "react";
import cn from "../../utils/cn";

import "./styles.css";
import TextAnimation from "./TextAnimation";

export const sidebarCloseButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="132"
      height="132"
      viewBox="0 0 132 132"
      fill="none"
    >
      <path
        d="M120.877 1.66733C125.828 1.68094 129.839 5.69133 129.852 10.6426L130.156 121.054C130.178 129.084 120.47 133.121 114.792 127.443L4.07708 16.7278C-1.60104 11.0497 2.43572 1.34182 10.4658 1.36389L120.877 1.66733Z"
        fill="#203A61"
        stroke="#0078D4"
        stroke-width="2"
      />
    </svg>
  );
};

function Sidebar() {
  const [open, setOpen] = useState(false);
  console.log(open)
  
  return (
    <div className="absolute w-screen h-screen z-10 bg-transparent ">
      {!open ? (
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="absolute flex items-center justify-center top-6 left-6  w-10 h-10 bg-slate-600 rounded-full"
        >
          <img src="/icons/compass.png" />
        </button>
      ) : (
        <div className="relative flex items-center w-2/6 left-10 h-full bg-slate-500 ease-in-out duration-300 ">
          <div
            className={cn(
              open ? "w-[90%]" : "w-0",
              "absolute h-[95%] top-7 left-4 rounded-[20px] shadow- ease-in-out bg-[#0078D4] duration-300 clip-corner-back"
            )}
          >
            <svg
              className="absolute -top-3 w-24 h-auto right-[-1px] z-20"
              xmlns="http://www.w3.org/2000/svg"
              width="132"
              height="132"
              viewBox="0 0 132 132"
              fill="none"
            >
              <path
                d="M120.877 1.66733C125.828 1.68094 129.839 5.69133 129.852 10.6426L130.156 121.054C130.178 129.084 120.47 133.121 114.792 127.443L4.07708 16.7278C-1.60104 11.0497 2.43572 1.34182 10.4658 1.36389L120.877 1.66733Z"
                fill="#203A61"
                stroke="#0078D4"
                stroke-width="2"
              />
            </svg>
            {/* <div className="absolute -top-2 right-0 rounded-[20px] bg-black z-20 w-36 h-36"/>  */}
            {/* <div className="absolute top-8 right-10 bg-white z-20 w-48 h-48 rotate-45"/>/ */}
          </div>
          <div
            className={cn(
              open ? "w-[90%]" : "w-0",
              "relative flex flex-col items-center justify-evenly z-10 h-[95%] border-[2px] border-[#0078D4] rounded-[20px] shadow- ease-in-out bg-black duration-300 clip-corner-front"
            )}
          >
            {/* Discover */}
            <div className="w-5/6 h-3/6 border-b-[1px] border-[#0078D4] cursor-pointer">
              <div className="flex flex-row w-4/5 bg-slate-100 h-full">
                <TextAnimation word='DISCOVER' className='"h-full w-1/4 bg-black text-[#0078D4] text-xs p-2 pt-8 uppercase"'  />
                <div className="flex flex-col items-start justify-evenly h-full w-3/4 bg-black pl-5 font-Wallpoet">
                  <TextAnimation word="HOME" className='flex items-center justify-start h-10 w-24 p-2 px-4 rounded-[2px] rounded-br-[10px] bg-[#0078d4] text-lg text-white active-black' />
                  <TextAnimation word="TEAM" className='flex items-center justify-start h-10 w-24 p-2 px-4 rounded-[2px] rounded-br-[10px] bg-[#0078d4] text-lg text-white active-black' />
                  <TextAnimation word="EVENTS" className='flex items-center justify-start h-10 w-28 p-2 px-4 rounded-[2px] rounded-br-[10px] bg-[#0078d4] text-lg text-white active-black' />
                  <TextAnimation word="BLOGS" className='flex items-center justify-start h-10 w-24 p-2 px-4 rounded-[2px] rounded-br-[10px] bg-[#0078d4] text-lg text-white active-black' />
                  <TextAnimation word="PROJECTS" className='flex items-center justify-start h-10 w-32 p-2 px-4 rounded-[2px] rounded-br-[10px] bg-[#0078d4] text-lg text-white active-black' />
                </div>
              </div>
            </div>

            {/* Connect */}
            <div className="w-5/6  h-2/6 border-b-[1px] border-[#0078D4] cursor-pointer">
              <div className="relative flex flex-row w-4/5 h-full">
                <TextAnimation word='CONNECT' className="h-full w-1/4  text-[#0078D4] text-xs p-2 pt-8 uppercase" />
                <div className="flex z-30 flex-col items-start justify-evenly h-full w-3/4 pl-5 ">
                  <TextAnimation word='LINKEDIN' className="flex items-center justify-start h-10 w-28 p-4 px-6 rounded-[2px] rounded-br-[10px] bg-[#0078d4] text-lg text-white active-black"  />
                  <TextAnimation word='INSTAGRAM' className="flex items-center justify-start h-10 w-36 p-4 px-6 rounded-[2px] rounded-br-[10px] bg-[#0078d4] text-lg text-white active-black" />
                  <TextAnimation word='GITHUB' className="flex items-center justify-start h-10 w-28 p-4 px-6 rounded-[2px] rounded-br-[10px] bg-[#0078d4] text-lg text-white active-black" />
                </div>
              </div>
            </div>
            {/* VIT Pune */}

            <div className="w-5/6 h-1/5 cursor-pointer">
              <div className="relative flex flex-row w-4/5 h-full">
                <TextAnimation word='CREDITS' className="h-full w-1/4  text-[#0078D4] text-xs p-2 pt-8 uppercase" />
              
                <div className="flex flex-col items-start justify-start pt-8 h-full w-3/4 pl-5 text-xs text-white">
                  @2023-24 Microsoft Learn Student Club, VIT Pune
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
