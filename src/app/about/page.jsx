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

export default function About() {
  const aboutYear = useMLSCStore((s) => s.aboutYear);
  const setAboutYear = useMLSCStore((s) => s.setAboutYear);

  console.log("YEAR ", aboutYear);

  const backgroundColors = useRef({
    // colorB: "#61b0ed",
    colorB: "#001e4e",
    colorA: "#001e4e",
  });

  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}
    >
      <Canvas shadows="basic" dpr={[0.1, 10]} camera={{ near: 0.1, far: 1000, }} >
        {/* <OrbitControls /> */}
        <color attach="background" args={["#000"]} />

        {/* <Environment preset="night" background /> */}
        {/* <AboutScene /> */}
        <Suspense>
          <PointerLockControls />
          <Physics>
            <MovingCamera position={[0, 2, 18]} />

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
      <Loader />
    </KeyboardControls>
  );
}
