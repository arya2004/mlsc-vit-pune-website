"use client";
import React from "react";
import { useMLSCStore } from "../store/MLSCStore";

import Home from "./Home";
import MotherBoardCity from "./MotherBoardCity";
import Sidebar from "./overlay-ui/Sidebar";

const HandleCaseOrMB = () => {
  const showMotherBoard = useMLSCStore((state) => state.showMotherBoard);
  console.log(`Show motherboard 2: ${showMotherBoard}`);
  
  return (
    <div className="w-screen h-screen">
      <Sidebar />
      {!showMotherBoard ? <Home /> : <MotherBoardCity />}
    </div>);
};

export default HandleCaseOrMB;
