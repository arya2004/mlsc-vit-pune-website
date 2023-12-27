import { Html } from "@react-three/drei";
import React from "react";

const About = () => {
  return (
    <div className="align-center flex flex-col items-center justify-evenly w-[400px] h-[350px] p-3 bg-transparent border-[2px] border-[#0078d4] rounded-[8px]  text-center text-[#0078d4]">
      <div className="font-bold">
        Welcome to Microsoft Learn Student Club VIT, Pune:
      </div>
      <div className="font-semibold">
        Join us on a journey of exploration and innovation at Microsoft Learn
        Student Club VIT, Pune! As passionate learners and tech enthusiasts, we
        strive to create a dynamic community that fosters collaboration and
        skill development. Whether you're a seasoned developer or just starting
        your tech journey, there's a place for you here.
      </div>
    </div>
  );
};

export default About;
