"use client";

import {
  OrbitControls,
  Loader,
  MeshPortalMaterial,
  Box,
  Octahedron,
  Environment,
  KeyboardControls,
  KeyboardControlsEntry,
  FirstPersonControls,
  PerspectiveCamera,
  PointerLockControls,
} from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import React, { Suspense, useRef, useMemo } from "react";

import { Background } from "./Components/Background.jsx";
import Effects from "./Components/Effects.jsx";
import MainPortal from "./Components/MainPlatform.jsx";

// import BlendFunction from "postprocessing";

import * as THREE from "three";

import Fillers from "./Components/Fillers.jsx";
import Portal from "./Components/Portal.jsx";
import MainPlatform from "./Components/MainPlatform.jsx";
import MovingCamera from "./Components/MovingCamera.jsx";
import { Physics, RigidBody } from "@react-three/rapier";

function page() {
  const sun = useRef();

  const backgroundColors = useRef({
    // colorB: "#61b0ed",
    colorB: "#001e4e",
    colorA: "#001e4e",
  });

  return (
    <div className="w-screen h-screen bg-transparent">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"]}
        ]}
      >
        <Canvas
          style={{ height: "100%", width: "100%" }}
          shadows="soft"
          camera={{ fov: 70, near: 0.1, far: 1000, 
            position: [0, 0, 15]}}
        >
         <OrbitControls />
          <ambientLight intensity={5} />

          {/* <Suspense >
            <Portal />
          </Suspense> */}
          {/* <PointerLockControls /> */}
          <Suspense>
            <Physics gravity={[0, -10, 0]} >
              {/* <MovingCamera /> */}

              <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, -20, 0]}
              >
                <MainPlatform scale={[.2, .2, .2]} />
              </RigidBody>
            </Physics>
          </Suspense>

          <Background backgroundColors={backgroundColors} />
          <Fillers />
          <Effects />
        </Canvas>
      </KeyboardControls>
      <Loader />
    </div>
  );
}

export default page;
