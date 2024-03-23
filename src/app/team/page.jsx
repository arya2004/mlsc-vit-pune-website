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
import React, { Suspense, useRef, useMemo, useState } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import * as THREE from "three";

import { Background } from "./Components/Background.jsx";
import Effects from "./Components/Effects.jsx";
import MainPortal from "./Components/MainPlatform.jsx";
import DomainLabels from "./Components/DomainLabel.jsx";
import DomainPortals from "./Components/DomainPortals.jsx";

// import BlendFunction from "postprocessing";
import {useMLSCStore} from "../store/MLSCStore";

import Fillers from "./Components/Fillers.jsx";
import Portal from "./Components/Portal.jsx";
import MainPlatform from "./Components/MainPlatform.jsx";
import MovingCamera from "./Components/MovingCamera.jsx";
import CustomLoader from "../components/CustomLoader.jsx";
import Sidebar from "../home/overlay-ui/Sidebar.jsx";
import PlaySoundButton from "../components-3d/PlaySoundButton.jsx";

function page() {
  const sun = useRef(); 

  // const teleporting = useMLSCStore((s) => s.teleporting);
  // const setTeleporting = useMLSCStore((s) => s.setTeleporting);

  // setTeleporting(false)

  const [teleporting, setTeleporting] = useState(false);
  const [inPortal, setInPortal] = useState(false);

  const backgroundColors = useRef({
    // colorB: "#61b0ed",
    colorB: "#001e4e",
    colorA: "#001e4e",
  });

  return (
    <div className="w-screen h-screen bg-transparent overflow-hidden">
      {/* <div onClick={setTeleporting(!teleporting)} className="absolute w-32 h-32 bg-slate-600 rounded-md right-5 bottom-5"></div> */}
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas
          style={{ height: "100%", width: "100%" }}
          shadows="basic"
          camera={{ fov: 70, near: 0.1, far: 1000, }}
          // position: [0, 0, 15]}}
          performance={{ current: 1, min: 0.1, max: 1, debounce: 200 }}
          frameloop="demand"
        >
          {/* <OrbitControls /> */}
          <ambientLight intensity={5} />
          <directionalLight
            castShadow
            color="purple"
            position={[0, 4, 5]}
            intensity={5}
          />
          {/* <axesHelper args={[100]} /> */}
          <Environment preset="night" />
          {/* <Suspense >
            <Portal />
          </Suspense> */}
          <PointerLockControls />
          <Suspense>
            <Physics gravity={[0, -10, 0]} >
              <MovingCamera position={[0, 2, 10]} teleporting={teleporting} setTeleporting={setTeleporting} inPortal={inPortal} setInPortal={setInPortal} />

              <RigidBody
                type="fixed"
                colliders="trimesh"
                position={[0, -20, 0]}
              >
                <MainPlatform position={[0, 10, 0]} scale={[0.2, 0.2, 0.2]} />
              </RigidBody>
              <Background backgroundColors={backgroundColors} />
            </Physics>
          </Suspense>
          <Suspense>
            {/* <DomainLabels /> */}
            <DomainPortals />
          </Suspense>
          <Fillers />
          <Effects inPortal={inPortal} />
        </Canvas>
      </KeyboardControls>
      <CustomLoader urlIndex={0}/>
      <PlaySoundButton />
      <Sidebar />
    </div>
  );
}

export default page;
