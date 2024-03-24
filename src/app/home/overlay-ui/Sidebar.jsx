import React, { useState, useEffect } from "react";
import { Link } from 'next/link';
import cn from "../../utils/cn";

import "./styles.css";
import TextAnimation from "./TextAnimation";
import {ClosingButton, Cross} from "./ClosingButtons";
import Option from "./Option";

import { useMLSCStore } from "../../store/MLSCStore";
import { useRouter } from "next/navigation";


function Sidebar() {
  // const [open, setOpen] = useState(false);
  // console.log(open)
  const router = useRouter();

  const playBGM = useMLSCStore((state) => state.playBGM);

  const sideBarOpen = useMLSCStore((state) => state.sideBarOpen);
  const SetSideBarOpen = useMLSCStore((state) => state.setSideBarOpen);

  const setPositionsInAbout = useMLSCStore((s) => s.setPositionsInAbout);

  return (
    <div className={cn(sideBarOpen?"sm:w-full lg:w-2/6": "sm:w-0 lg:w-0","absolute h-screen left-0 top-0 z-10 bg-transparent flex flex-row ease-in-out duration-300")}>
     {playBGM && sideBarOpen ? <audio src="/audio/sfx/sidebar-open.mp3" autoPlay />: <audio src="/audio/sfx/sidebar-close.mp3" autoPlay />}
     
      {/* {!sideBarOpen ? ( */}
        <button
          onClick={() => {
            SetSideBarOpen(true);
          }}
          className={cn(sideBarOpen?"opacity-0 pointer-events-none w-0 h-0":"absolute flex items-center justify-center top-6 left-6  w-10 h-10 bg-slate-600 rounded-full")}
        >
          <img src="/icons/compass.png" />
        </button>
      {/* ) : ( */}
        <div className={cn(sideBarOpen?"opacity-100":"opacity-0 pointer-events-none","relative flex items-center lg:w-full sm:w-full left-3 lg:left-10 h-full ease-in-out duration-300 ")}>
          <div //Shadow 
            className={cn(
              sideBarOpen ? "w-[90%]" : "w-0",
              "absolute h-[95%] top-7 left-4 rounded-[20px] shadow- ease-in-out duration-300 clip-corner-shadow"
            )}
          >
            <div className="cursor-pointer" onClick={()=>{SetSideBarOpen(false)}}>
            <ClosingButton />
            <Cross />
            </div>
            {/* <div className="absolute -top-2 right-0 rounded-[20px] bg-black z-20 w-36 h-36"/>  */}
            {/* <div className="absolute top-8 right-10 bg-[#E6E6E6] z-20 w-48 h-48 rotate-45"/>/ */}
          </div>
          <div //Main container
            className={cn(
              sideBarOpen ? "w-[90%]" : "w-0",
              "relative flex flex-col items-center justify-evenly z-10 h-[95%] rounded-[20px] ease-in-out clip-corner duration-300 drop-shadow-2xl"
            )}
          >
            {/* Discover */}
            <div className="w-5/6 h-3/6 border-b-[1px] border-[#0078D4] cursor-pointer">
              <div className="flex flex-row w-4/5 h-full">
                <TextAnimation word='DISCOVER' className="h-full w-1/4 text-[#0078D4] text-xs p-2 pt-8 uppercase ease-in-out duration-300"  />
                <div className="flex flex-col items-start justify-evenly h-full w-3/4 bg-transparent pl-5">
                  
                  <Option onClick={()=>router.push('/')} text="HOME" number="01" addStyles={{'width':'7rem'}} /> 
                  <Option onClick={()=>router.push('/team')} text="TEAM" number="02" addStyles={{'width':'7rem'}} /> 
                  <Option onClick={()=>router.push('/path-to-about')} text="EVENTS" number="03" addStyles={{'width':'9rem'}} /> 
                  <Option onClick={()=>{router.push('/path-to-about'); setPositionsInAbout('projects')}} text="PROJECTS" number="04" addStyles={{'width':'11.5rem'}} /> 
                  <Option onClick={()=>{router.push('/path-to-about'); setPositionsInAbout('blogs')}} text="BLOG" number="05" addStyles={{'width':'7rem'}} /> 

                </div>
              </div>
            </div>

            {/* Connect */}
            <div className="w-5/6  h-2/6 border-b-[1px] border-[#0078D4] cursor-pointer">
              <div className="relative flex flex-row w-4/5 h-full">
                <TextAnimation word='CONNECT' className="h-full w-1/4  text-[#0078D4] text-xs p-2 pt-8 uppercase  ease-in-out duration-300" />
                <div className="flex z-30 flex-col items-start justify-evenly h-full w-3/4 pl-5 ">
                  <TextAnimation word='LINKEDIN' className="flex items-center justify-start h-10 w-[8rem] p-2 px-3 rounded-[2px] rounded-br-[19px] clip-corner-option text-lg text-[#E6E6E6] active-black font-Wallpoet  ease-in-out duration-300"  />
                  <TextAnimation word='INSTAGRAM' className="flex items-center justify-start h-10 w-[9.5rem] p-2 px-3 rounded-[2px] rounded-br-[19px] clip-corner-option text-lg text-[#E6E6E6] active-black font-Wallpoet  ease-in-out duration-300" />
                  <TextAnimation word='GITHUB' className="flex items-center justify-start h-10 w-[7rem] p-2 px-3 rounded-[2px] rounded-br-[19px] clip-corner-option text-lg text-[#E6E6E6] active-black font-Wallpoet  ease-in-out duration-300" />
                </div>
              </div>
            </div>
            {/* VIT Pune */}

            <div className="w-5/6 h-1/5 cursor-pointer">
              <div className="relative flex flex-row w-4/5 h-full">
                <TextAnimation word='CREDITS' className="h-full w-1/4  text-[#0078D4] text-xs p-2 pt-8 uppercase  ease-in-out duration-300" />
              
                <div className="flex flex-col items-start justify-start pt-8 h-full w-3/4 pl-5 text-xs text-[#E6E6E6]  ease-in-out duration-300">
                  @2023-24 Microsoft Learn Student Club, VIT Pune
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
}

export default Sidebar;
