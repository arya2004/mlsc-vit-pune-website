"use client";

import { Canvas } from "@react-three/fiber";
import {
  Lightformer,
  Loader,
  MeshPortalMaterial,
  OrbitControls,
  Environment,
  PointMaterialImpl,
  PointerLockControls,
  KeyboardControls,
  PerspectiveCamera,
} from "@react-three/drei";

import AboutScene from "./AboutScene";
import { AboutDoor } from "../path-to-about/AboutDoor";
import Effects from "../path-to-about/Effects";
import { Background } from "../path-to-about/Background";
import Fillers from "../path-to-about/Fillers";

import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils";
import { Physics, RigidBody } from "@react-three/rapier";
import { Suspense, useState, useRef } from "react";
import MovingCamera from "./MovingCamera";

import { useMLSCStore } from "../store/MLSCStore";
import CustomLoader from "../components/CustomLoader";
import Sidebar from "../home/overlay-ui/Sidebar";
import PlaySoundButton from "../components-3d/PlaySoundButton";

export default function About() {
  const aboutYear = useMLSCStore((s) => s.aboutYear);
  const setAboutYear = useMLSCStore((s) => s.setAboutYear);

  const positionsInAbout = useMLSCStore((s) => s.positionsInAbout);
  console.log("YEAR ", aboutYear);

  const backgroundColors = useRef({
    // colorB: "#61b0ed",
    colorB: "#001e4e",
    colorA: "#001e4e",
  });

  const positions = {
    projects: [-10, 2, -0.108],
    blogs: [10, 2, -0.108],
    gen: [0, 2, 18],
  }

  return (
    <div className="overflow-hidden h-screen w-screen">
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Canvas shadows="basic" dpr={[0.1, 10]} performance={{current: 1, min: 0.1, max: 1, debounce: 200,}} >
        {/* <OrbitControls /> */}
        <color attach="background" args={["#000"]} />
        <PerspectiveCamera makeDefault near={0.1} far={1000} lookAt={[0,0,0]} />

        {/* <Environment preset="night" background /> */}
        {/* <AboutScene /> */}
        <Suspense>
          <PointerLockControls />
          <Physics>
            <MovingCamera position={positions[positionsInAbout]} />

            {/* {aboutYear !== "" ? ( */}

            <Suspense fallback={null}>
              <RigidBody colliders="trimesh" type="fixed">
                <AboutScene />
              </RigidBody>
            </Suspense>

            {/*  */}

            {/* <AboutDoor rotation={[0, Math.PI/6+degToRad(5), 0]} scale={[0.2, 0.2, 0.2]} position={[-0.2, -2, 0.7]} /> */}
          </Physics>
        </Suspense>

        {/* <Background backgroundColors={backgroundColors} /> */}
        {/* <Fillers /> */}
        {/* <Effects /> */}
      </Canvas>
    </KeyboardControls>
      <PlaySoundButton />
      <CustomLoader urlIndex={0} />
      <Sidebar />
    </div>
  );
}
