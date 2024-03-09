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
  KeyboardControls
} from "@react-three/drei";

import AboutScene from "./AboutScene";
import { AboutDoor } from "./AboutDoor";

import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils";
import { Physics, RigidBody } from "@react-three/rapier";
import { Suspense, useState } from "react";
import MovingCamera from "./MovingCamera";

export default function About() {
  const [year, setYear] = useState("");

  console.log("YEAR ",year)

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
      <Canvas shadows="basic" dpr={[0.1, 10]}>
        <OrbitControls />
        <color attach="background" args={["#fff"]} />
        {/* <directionalLight position={[3, 3, 0]} intensity={5} color='white' /> */}
        {/* <Environment preset="night" background /> */}
        {/* <AboutScene /> */}
        <Suspense>
          {/* <PointerLockControls /> */}
          <Physics >

            {/* <MovingCamera position={[0, 2, 3]} /> */}

            {year !== "" ? (
              <Suspense fallback={null}>
                <RigidBody colliders='trimesh' type="fixed" >
                  <AboutScene />
                </RigidBody>
              </Suspense>
            ) : (
              <Suspense fallback={null}>
                {/* <ambientLight intensity={5} />
                <directionalLight
                  castShadow
                  color="purple"
                  position={[0, 4, 5]}
                  intensity={5}
                /> */}
                <RigidBody colliders='trimesh' type="fixed" >
                 
                <AboutDoor
                  rotation={[0, Math.PI / 6 + degToRad(5), 0]}
                  scale={[0.2, 0.2, 0.2]}
                  position={[-0.2, -2, 0.7]}
                />
                </RigidBody>
              </Suspense>
            )}

            {/* <AboutDoor rotation={[0, Math.PI/6+degToRad(5), 0]} scale={[0.2, 0.2, 0.2]} position={[-0.2, -2, 0.7]} /> */}
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
    </KeyboardControls>
  );
}
