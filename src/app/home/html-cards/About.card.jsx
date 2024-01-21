import { Html, Text, Text3D } from "@react-three/drei";
import React from "react";
import "./cards_style.scss";

import cn from "../../utils/cn";

const AboutMesh = () => {
  
  let timer = true;
  console.log(`TIMER1: ${timer}`);

  setTimeout(() => {
    timer = false;
    console.log(`TIMER2: ${timer}`);
  }, 4000);

  const text =
    "Join us on a journey of exploration and innovation at Microsoft Learn Student Club VIT, Pune! As passionate learners and tech enthusiasts, we strive to create a dynamic community that fosters collaboration and skill development. Whether you're a seasoned developer or just starting your tech journey, there's a place for you here.";
  const textArray = text.split(" ");

  return (
    <Html>
      <div className="container align-center flex flex-col items-center justify-evenly w-[550px] h-[350px] p-3 bg-transparent rounded-[8px] text-2xl text-center text-[#00040cbd] uppercase  stable-shadows">
        <div
          className={cn(!timer ? "font-bold" : "font-bold glitch")}
          data-text="Welcome to Microsoft Learn Student Club VIT, Pune"
        >
          Welcome to Microsoft Learn Student Club VIT, Pune:
        </div>
        <div className="font-semibold">
          {textArray.map((word, index) => (
            <span
              key={index}
              className={"glitch"}
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
