'use client'

import React, {useEffect, useState} from "react";
import { Html, useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import cn from "../../utils/cn";
import { degToRad } from "three/src/math/MathUtils";

const GetInvolved = ({showGetInvolved}) => {

  const [glitchOn, setGlitchOn] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlitchOn(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  // const {scrollData} = useScroll();
  const {gl} = useThree();

  const text = 'Ready to embark on a learning adventure? Join our vibrant community! Stay updated on upcoming events, participate in hackathons, and collaborate on exciting projects. Whether you\'re passionate about AI, web development, or cloud computing, Microsoft Learn Student Club VIT, Pune is your gateway to acquiring skills, making friends, and shaping a successful future in the tech world. Let\'s learn, innovate, and grow together!';
  const textArray = text.split(' ');

  return (
    <Html as='div' scale={[.06, .06, .06]} position={[-2, 0.7, -2.2]} rotation={[0, degToRad(45), 0]} transform portal={{current: gl.domElement.parentNode}} >
    <div className={cn(showGetInvolved?"w-[450px] h-auto":"h-0 w-0 opacity-0","align-center flex flex-col items-center justify-evenly p-3 bg-transparent text-center text-[#00040cbd] stable-shadows uppercase ease-in-out duration-300 pointer-events-none")}>
      <div className={cn(glitchOn ?"glitch font-bold":"font-bold")}>Get Involved:</div>
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
