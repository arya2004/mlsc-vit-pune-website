'use client'

import React, {useEffect, useState} from "react";
import { Html, useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import cn from "../../utils/cn";
import { degToRad } from "three/src/math/MathUtils";

const GetInvolved = ({showGetInvolved}) => {

  const [glitchOn, setGlitchOn] = React.useState(true);
  const [isMobile, setIsMobile] = useState(false);  

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.innerWidth]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setGlitchOn(false);
  //   }, 15000);

  //   return () => clearTimeout(timer);
  // }, []);

  // const {scrollData} = useScroll();
  const {gl} = useThree();

  const text = 'Ready to embark on a learning adventure? Join our vibrant community! Stay updated on upcoming events, participate in hackathons, and collaborate on exciting projects. Whether you\'re passionate about AI, web development, or cloud computing, Microsoft Learn Student Club VIT, Pune is your gateway to acquiring skills, making friends, and shaping a successful future in the tech world. Let\'s learn, innovate, and grow together!';
  const textArray = text.split(' ');

  return (
    <Html as='div' scale={isMobile?0.055:0.06} position={isMobile?[-2, 0.735, -1.8]:[-2, 0.735, -2.2]} rotation={isMobile?[0, degToRad(85), 0]:[0, degToRad(45), 0]} transform portal={{current: gl.domElement.parentNode}} >
    <div className={cn(showGetInvolved?"lg:w-[450px] w-[350px] h-auto":"h-0 w-0 opacity-0","align-center flex flex-col items-center justify-evenly p-3 bg-transparent text-center text-[#00040cbd] stable-shadows uppercase ease-in-out duration-300 pointer-events-none")}>
      <div className={"glitch font-bold underline"}>Get Involved:</div>
      <div className="font-semibold flex flex-wrap gap-x-1.5 items-start">
      {textArray.map((word, index) => (
            <span
              key={index}
              className={glitchOn && "glitch"}
              data-text={word+" "}
            >
              {word}{" "}
            </span>
          ))}
      </div>
    </div>
    </Html>
  );
};

export default GetInvolved;
