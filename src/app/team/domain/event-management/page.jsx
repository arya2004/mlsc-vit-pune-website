"use client";

import {
  Loader,
  OrbitControls,
  Stage,
  AccumulativeShadows,
  RandomizedLight,
  PerspectiveCamera,
  SpotLight,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Avatar } from "./Avatar.jsx";
import { CoreTeamScene } from "./CoreTeamScene.jsx";
import MemberScene from "./MemberScene.jsx";
import {NameYearDept, SocialIcons, YearDept} from "./UI.jsx";

import { Suspense, useRef, useState } from "react";

function Page() {


  return (
    <>
      <Canvas
        style={{ width: "100w", height: "100vh" }}
        // camera={{ position: [0, 1.8, 6], target: [0, 3, 0], near: 0.05, far: 50, fov: 50 }}
        shadows="soft"
      >
        {/* <OrbitControls /> */}
        <PerspectiveCamera
          makeDefault
          position={[0, 2, 12]}
          lookAt={[0, 0.5, 0]}
          near={0.05}
          far={50}
          fov={50}
        />
        <color attach="background" args={["#010114"]} />

        {/* <ambientLight intensity={1} /> */}
        <directionalLight
          position={[0, 2, -5]}
          color="#88b6f5"
          intensity={0.5}
          castShadow
        />
        {/* <axesHelper args={[5]} /> */}
        <pointLight distance={3} position={[0, 2.6, 1]} intensity={2} />
        <Suspense fallback={null}>
         <SpotLight position={[0, 3.5, 0]} penumbra={0.8} angle={Math.PI/8} radiusTop={3} radiusBottom={5} attenuation={5} distance={5} intensity={5} color='white' />
         <spotLight position={[0, 0, 2]} angle={Math.PI/2} intensity={2} />

          <ScrollControls pages={5} damping={2} >
            <MemberScene />
          </ScrollControls>
        <YearDept />
        <SocialIcons />
        <NameYearDept />

        </Suspense>
      </Canvas>
      
      <Loader />
    </>
  );
}

export default Page;
