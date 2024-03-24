'use client'

import { Html, Text, Text3D } from "@react-three/drei";
import React, {useState, useEffect} from "react";
import "./cards_style.scss";

import cn from "../../utils/cn";
import { useThree } from "@react-three/fiber";

const AboutMesh = ({showAbout}) => {

  const [glitchOn, setGlitchOn] = React.useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setGlitchOn(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  const text =
    "Join us on a journey of exploration and innovation at Microsoft Learn Student Club VIT, Pune! As passionate learners and tech enthusiasts, we strive to create a dynamic community that fosters collaboration and skill development. Whether you're a seasoned developer or just starting your tech journey, there's a place for you here.";
  const textArray = text.split(" ");

  const {gl} = useThree()

  return (
    <Html as="div" position={[2.5, 1.1, -2.8]} scale={[.1, .1, .1]} rotation={[0, -Math.PI/8, 0]} transform portal={{ current: gl.domElement.parentNode }}>
      <div className={cn(showAbout?"w-[600px] h-[350px]":"w-0 h-0 opacity-0","flex flex-col gap-1 items-start justify-evenlyp-3 bg-transparent text-xl text-center text-[#00040cbd] stable-shadows ease-in-out duration-200 uppercase pointer-events-none")}>
        <div
          className={cn(!glitchOn ? "font-bold" : "font-bold glitch", "underline")}
          data-text="Welcome to Microsoft Learn Student Club VIT, Pune"
        >
          Welcome to Microsoft Learn Student Club VIT, Pune:
        </div>
        <div className="font-semibold flex flex-wrap gap-x-1.5 items-center">
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

// const AboutMesh = () => {
//   return (
//     <>
//       <group position={[2.6, 1.1, -3]} rotation={[0, -Math.PI / 6, 0]}>
//         <Text3D

//           position={[-.2, 0.5, 0]}
//           scale={[1, 1, 1]}
//           // color="#0078d4"
//         >
//           Welcome to Microsoft Learn Student Club VIT, Pune:{"\n"}
//           <meshBasicMaterial color="#20151f" />
//         </Text3D>

//         <Text3D  position={[-.2, 0, 0]} scale={[1, 1, 1]} >
//           Join us on a journey of exploration and {"\n"} innovation at Microsoft
//           Learn Student Club VIT, Pune! {"\n"} As passionate learners and tech
//           enthusiasts, {"\n"}
//           we strive to create a dynamic community that {"\n"} fosters
//           collaboration and skill development. {"\n"} Whether you're a seasoned
//           developer or just {"\n"}
//           starting your tech journey, there's a {"\n"} place for you here.
//         </Text3D>
//       </group>
//     </>
//   );
// };

export default AboutMesh;
