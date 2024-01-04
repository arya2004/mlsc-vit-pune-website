import { Html, Text } from "@react-three/drei";
import React from "react";

// const About = () => {
//   return (
//     <Html>
//       <div className="align-center flex flex-col items-center justify-evenly w-[400px] h-[350px] p-3 bg-transparent border-[2px] border-[#0078d4] rounded-[8px]  text-center text-[#0078d4]">
//         <div className="font-bold">
//           Welcome to Microsoft Learn Student Club VIT, Pune:
//         </div>
//         <div className="font-semibold">
//           Join us on a journey of exploration and innovation at Microsoft Learn
//           Student Club VIT, Pune! As passionate learners and tech enthusiasts,
//           we strive to create a dynamic community that fosters collaboration and
//           skill development. Whether you're a seasoned developer or just
//           starting your tech journey, there's a place for you here.
//         </div>
//       </div>
//     </Html>
//   );
// };

const AboutMesh = () => {
  return (
    <>
      <group position={[2.6, 1.1, -3]} rotation={[0, -Math.PI / 6, 0]}>
        <Text
          fontSize={0.11}
          position={[-.2, 0.5, 0]}
          scale={[1, 1, 1]}
          // color="#0078d4"
        >
          Welcome to Microsoft Learn Student Club VIT, Pune:{"\n"}
          <meshBasicMaterial color="#20151f" />
        </Text>

        <Text  position={[-.2, 0, 0]} fontSize={0.1} scale={[1, 1, 1]} color="#20151f">
          Join us on a journey of exploration and {"\n"} innovation at Microsoft
          Learn Student Club VIT, Pune! {"\n"} As passionate learners and tech
          enthusiasts, {"\n"}
          we strive to create a dynamic community that {"\n"} fosters
          collaboration and skill development. {"\n"} Whether you're a seasoned
          developer or just {"\n"}
          starting your tech journey, there's a {"\n"} place for you here.
        </Text>
      </group>
    </>
  );
};

export default AboutMesh;
