"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Loader,
  ScrollControls,
  MeshReflectorMaterial,
  Text,
} from "@react-three/drei";

import { CPUcase2 } from "../components/CpuCase2";
import ScrollCamera from "./ScrollCamera";

function Home() {

  // For Responsiveness:
  // const widthChange = window.innerWidth/1300;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="h-100vh w-100vh">
      <Canvas style={{ width: "100vw", height: "100vh" }} >
        {/* <OrbitControls /> */}
        <color attach="background" args={["black"]} />
        <fog attach="fog" args={["black", 10, 50]} />
        <ambientLight intensity={0.3} />

        <ScrollControls pages={3} damping={3}>
          <ScrollCamera />
        </ScrollControls>

        {/* <Environment preset="warehouse" background/> */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.5, 0]}
          receiveShadow
        >
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#010101" roughness={1} metalness={2} />
          {/* <MeshReflectorMaterial color="#010101" roughness={1} metalness={2} /> */}
        </mesh>

        <mesh position={isMobile ? [0, 5.5, -11] :[0, 5.5, -1]} receiveShadow>  // Handling the responsiveness
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#010101" roughness={1} metalness={2} />
          {/* <MeshReflectorMaterial color="#010101" roughness={1} metalness={2} /> */}
        </mesh>

        <Text
          scale={0.2}
          position={isMobile ? [0, 1.2, -10] :[0, 0.5, 0]}  //Handling the responsiveness
          anchorY="middle"
          anchorX="center"
          castShadow
          characters="abcdefghijklmnopqrstuvwxyz,"
        >
          {"MICROSOFT LEARN STUDENT CLUB \n                       VIT, PUNE"}
        </Text>

        <Suspense>
          <CPUcase2 position={[0, -0.5, 0]} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default Home;
