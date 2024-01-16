"use client";
import React, { Suspense, useRef } from "react";
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
  return (
    <div className="h-100vh w-100vh">
      <Canvas style={{ width: "100vw", height: "100vh" }} shadows>
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

        <mesh position={[0, 5.5, -1]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#010101" roughness={1} metalness={2} />
          {/* <MeshReflectorMaterial color="#010101" roughness={1} metalness={2} /> */}
        </mesh>

        <Text
          scale={0.2}
          position={[0, 0.5, 0]}
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
