import React, { useEffect, useState } from "react";

import { Html } from "@react-three/drei";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";

import {useMLSCStore} from "../store/MLSCStore";
import cn from "../utils/cn";


export function YearCard({text, show,  visible, position, scale, rotation}){

    const aboutYear = useMLSCStore((s) => s.aboutYear);
    const setAboutYear = useMLSCStore((s) => s.setAboutYear);

    const yearArr = ["2021-22", "2022-23", "2023-24"];
    const [yearIndex, setYearIndex] = useState(2);

    useEffect(() => {
        setAboutYear(yearArr[yearIndex]);
    }), [yearIndex];

    const handleClickPrev = () => {
        if(yearIndex > 0)
        setYearIndex(yearIndex - 1);
    }

    const handleClickNext = () => {
        setYearIndex((yearIndex + 1) % 3);
    }

    return(
        <Html visible={visible} transform occlude position={position} scale={scale} rotation={rotation} >

            <div className={cn(show?" w-auto h-20 p-16":"w-0 h-0 opacity-0 pointer-events-none","flex items-center min-w-20 p-2 justify-center bg-[url('/images/svgs/spo-button.svg')] bg-cover bg-center rounded-[8px] border-1 border-[#84c0e5] cursor-pointer ease-in-out duration-200")}>
                
                <div className="flex flex-row items-center justify-center gap-[0.6rem] text-[#65a8d2] text-xs font-bold">
                    <GrCaretPrevious onClick={handleClickPrev} className="relative hover:text-[#84c0e5]" />
                    <div className=" align-middle " >{yearArr[yearIndex]}</div>
                    <GrCaretNext onClick={handleClickNext} className="relative hover:text-[#84c0e5]" />
                </div>
            </div>
        </Html>
    )
}