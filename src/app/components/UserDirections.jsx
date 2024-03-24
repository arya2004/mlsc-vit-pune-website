import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { useState, useEffect } from "react";
import cn from "../utils/cn";
import './styles.css';

export function ScrollDown() {

    const [isVisible, setIsVisible] = useState(true);

    setTimeout(() => {
        setIsVisible(false);
    }, 10000);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(false);
//       window.removeEventListener('scroll', handleScroll);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
    
    // document.addEventListener("scroll", setShow(false) )
  return (
    <div className={cn(!isVisible?"-bottom-8 pointer-events-none":"absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center ease-in-out duration-200 animate-blink")}>
        <div className="text-sm text-[#f0f0f0]">
            scroll down to explore
        </div>
        <FaArrowDown className="text-[#f0f0f0] text-sm" />
    </div>
  )
}

export function ScrollDownRotate() {

    const [isVisible, setIsVisible] = useState(true);

    setTimeout(() => {
        setIsVisible(false);
    }, 15000);

    return (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center p-2 px-4 bg-slate-700 bg-opacity-50 rounded-[20px] justify-center">
              <div className="text-sm text-[#f0f0f0]">
                  Click on the photo to ZOOM
              </div>
              <div className="text-sm text-[#f0f0f0]">
                  scroll down up to rotate
              </div>
              <div className="flex flex-row">
                <FaArrowDown className="text-[#f0f0f0] text-sm" />
                <FaArrowUp className="text-[#f0f0f0] text-sm" />
              </div>
          </div>
        
    )
  }

export function WASDMotion() {
    const[show, setShow] = useState(true);

    return (
        <div className={cn(show?"w-screen h-screen":"opacity-0 pointer-events-none w-0 h-0 ","top-0 left-0 right-0 bottom-0 absolute flex items-center justify-center backdrop-blur-sm ease-in-out duration-500")}>
            <div onClick={()=>setShow(false)} className="bg-cover bg-center bg-[url('/images/svgs/spo-button.svg')] w-96 h-72 hover:brightness-150 flex items-center justify-center text-lg text-[#f0f0f0] font-bold cursor-pointer ease-in-out duration-100">Ok</div>
            <div className={cn(show?"w-72 h-36":"w-0 h-0 opacity-0 pointer-events-none" ,"absolute bottom-8 right-8 flex flex-row text-[#f0f0f0] bg-black ease-in-out duration-200")}>
            <div className="w-1/2 h-full">
             <div className="w-full h-1/2 text-sm p-1 text-wrap">
                Use <u>w-a-s-d</u> or <u>arrow</u> keys to move, press <u>space</u> to jump
             </div>
             <div className="w-full h-1/2 text-sm p-1 text-wrap">
                <div className="bg-cover bg-center bg-[url('/icons/mouse-icon.png')] w-6 h-6" /> use mouse to look around
             </div>
            </div>
            <div className="w-1/2 h-full bg-center bg-cover bg-[url('/icons/wasd-icon.png')]" />
        </div>
        </div>
    )
}

export function PassThrough() {
    const[show, setShow] = useState(true);
    return (
        <div className={cn(show?"w-screen h-screen":"opacity-0 pointer-events-none w-0 h-0 ","top-0 left-0 right-0 bottom-0 absolute flex items-center gap-4 justify-center backdrop-blur-sm ease-in-out duration-500")}>
            <div className="text-lg text-[#f0f0f0] ">Pass through the portal ahead!</div>
            <div onClick={()=>setShow(false)} className="bg-cover bg-center bg-[url('/images/svgs/spo-button.svg')] w-96 h-72 hover:brightness-150 flex items-center justify-center text-lg text-[#f0f0f0] font-bold cursor-pointer ease-in-out duration-100">Ok</div>
            <div className={cn(show?"w-72 h-36":"w-0 h-0 opacity-0 pointer-events-none" ,"absolute bottom-8 right-8 flex flex-row text-[#f0f0f0] bg-black ease-in-out duration-200")}>
            <div className="w-1/2 h-full">
             <div className="w-full h-1/2 text-sm p-1 text-wrap">
                Use <u>w-a-s-d</u> or <u>arrow</u> keys to move, press <u>space</u> to jump
             </div>
             <div className="w-full h-1/2 text-sm p-1 text-wrap">
                <div className="bg-cover bg-center bg-[url('/icons/mouse-icon.png')] w-6 h-6" /> use mouse to look around
             </div>
            </div>
            <div className="w-1/2 h-full bg-center bg-cover bg-[url('/icons/wasd-icon.png')]" />
        </div>
        </div>
    )
}