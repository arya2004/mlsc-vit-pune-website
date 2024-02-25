"use client";
import React from "react";
import { useMLSCStore } from "../store/MLSCStore";

import Home from "./Home";
import MotherBoardCity from "./MotherBoardCity";

const HandleCaseOrMB = () => {
  const showMotherBoard = useMLSCStore((state) => state.showMotherBoard);
  console.log(`Show motherboard 2: ${showMotherBoard}`);
  
  return <div>{!showMotherBoard ? <Home /> : <MotherBoardCity />}</div>;
};

export default HandleCaseOrMB;
