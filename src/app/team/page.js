"use client";

import {
  OrbitControls,
  Loader,
  MeshPortalMaterial,
  Box,
  Octahedron,
  Environment,
} from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import React, { useRef } from "react";

import { Background } from "./Components/Background.jsx";
import Effects from "./Components/Effects.jsx";

// import BlendFunction from "postprocessing";

import * as THREE from "three";

import Fillers from "./Components/Fillers.jsx";
import Portal from "./Components/Portal.jsx";

function page() {
  const sun = useRef();

  const backgroundColors = useRef({
    // colorB: "#61b0ed",
    colorB: "#001e4e",
    colorA: "#001e4e",
  });

  return (
    <div className="w-screen h-screen bg-transparent">
      <Canvas style={{ height: "100%", width: "100%" }}>
        <OrbitControls />

        <Portal />

        

        <Background backgroundColors={backgroundColors} />
        <Fillers />
        <Effects />
      </Canvas>
      <Loader />
    </div>
  );
}

export default page;
