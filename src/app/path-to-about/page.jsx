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

// import AboutScene from "./AboutScene";
import { AboutDoor } from "./AboutDoor";
import Effects from "./Effects"
import { Background } from "./Background";
import Fillers from "./Fillers";

import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils";
import { Physics, RigidBody } from "@react-three/rapier";
import { Suspense, useState, useRef } from "react";
import MovingCamera from "./MovingCamera";

import { useMLSCStore } from "../store/MLSCStore";  

export default function toTheAbout() {
  
  const aboutYear = useMLSCStore((s) => s.aboutYear);
  const setAboutYear = useMLSCStore((s) => s.setAboutYear);

  console.log("YEAR ",aboutYear)

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
      <Canvas shadows="basic" dpr={[0.1, 10]}>
        {/* <OrbitControls /> */}
        <color attach="background" args={["#000"]} />
        
        {/* <Environment preset="night" background /> */}
        {/* <AboutScene /> */}
        <Suspense>
          {/* <PointerLockControls /> */}
          <Physics >

            <MovingCamera position={[0, 2, 5]} />

              <Suspense fallback={null}>
                {/* <ambientLight intensity={5} />
                <directionalLight
                  castShadow
                  color="purple"
                  position={[0, 4, 5]}
                  intensity={5}
                /> */}
                <Environment preset="night" />
                <RigidBody colliders='trimesh' type="fixed" >
                  <AboutDoor
                   
                    rotation={[0, Math.PI / 6+degToRad(10), 0]}
                    scale={[0.2, 0.2, 0.2]}
                    position={[-17, -2, -18]}
                  />
                </RigidBody>
              </Suspense>
            {/* )} */}

            {/* <AboutDoor rotation={[0, Math.PI/6+degToRad(5), 0]} scale={[0.2, 0.2, 0.2]} position={[-0.2, -2, 0.7]} /> */}
          </Physics>
        </Suspense>

        <Background backgroundColors={backgroundColors} />
        <Fillers />
        <Effects />
      </Canvas>
      <Loader />
    </KeyboardControls>
  );
}
