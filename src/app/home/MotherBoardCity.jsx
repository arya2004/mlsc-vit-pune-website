"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";

import {
  Box,
  Cloud,
  Clouds,
  Environment,
  Loader,
  Mask,
  MeshDistortMaterial,
  MeshReflectorMaterial,
  OrbitControls,
  PointerLockControls,
  ScrollControls,
  Sky,
  Sparkles,
  SpotLight,
  Stars,
  AdaptiveDpr,
} from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import ExploreCamera from './ExploreCamera'
import { MotherBoard } from '../components-3d/Motherboard'
import BeforeMotherBoard from './BeforeMotherBoard'

import AboutMesh from './html-cards/About.card'
import GetInvolved from './html-cards/GetInvolved.card'
import Offer from './html-cards/Offer.card'
import NavButtons from './NavButtons'

import cn from '../../app/utils/cn'
import { useMLSCStore } from '../../app/store/MLSCStore'

const page = () => {

  const sidebarOpen = useMLSCStore((state) => state.sidebarOpen);

  const [isCloudResourceAvailable, setIsCloudResourceAvailable] = useState(false);
  
  const [showAbout, setShowAbout] = useState(true);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const [showNavButtons, setShowNavButtons] = useState(false); 
  
  const regress = useThree((state) => state.performance.regress)

  useEffect(() => {
    fetch(
      "https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png:"
    )
      .then((response) => {
        if (response.ok) {
          setIsCloudResourceAvailable(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="overflow-hidden" >
      <Canvas
        className={cn(sidebarOpen && showNavButtons?"blur-sm":"blur-0","h-screen w-screen")}
        performance={{ min: 0.1, max: 0.9 }}
        style={{ height: "100vh", width: "100vw" }}
        camera={{ position: [0, 0, 30], near: 0.05, far: 1000, fov: 10 }}
      >
        {/* <OrbitControls /> */}

        {/* <ambientLight intensity={5} /> */}
        <color attach="background" args={["black"]} />
        <directionalLight position={[5, 5, -3]} color='purple' intensity={6} />
        <directionalLight position={[5, 5, 5]} color='#0078d4' intensity={9} />
        {/* <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          color="red"
          penumbra={1}
        /> */}
        {/* <directionalLight position={[0, 10, 5]} intensity={1} /> */}

        {/* <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.1} /> */}
        {/* <SpotLight position={[0, 5, 5]} angle={Math.PI/6} color='red' intensity={5} opacity={0.8} penumbra={0.8} distance={12} /> */}

        {/* <group rotation={[0, Math.PI / 2, 0]}>
          <Environment
            resolution={120}
            files="/environments/motherboard-sky.hdr"
            background
          />
        </group> */}

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {isCloudResourceAvailable && <Cloud color="grey" opacity={0.5} />}
        <Sparkles scale={6} size={1} speed={0.5} noise={0.3} color="purple" />

        {/* <axesHelper args={[50]} />
        <gridHelper args={[50, 50]} /> */}

        <ScrollControls pages={10} damping={3}>
          <ExploreCamera
            setShowAbout={setShowAbout}
            setShowGetInvolved={setShowGetInvolved}
            setShowNavButtons={setShowNavButtons}
          />
        </ScrollControls>
        {/* <PointerLockControls /> */}

        <GetInvolved showGetInvolved={showGetInvolved} />
        <AboutMesh showAbout={showAbout} />

        <Suspense fallback={<BeforeMotherBoard />}>
          <MotherBoard rotation={[Math.PI / 2, Math.PI, -Math.PI / 2]} />
        </Suspense>

        {/* <Box material-color='red' args={[0.1, 0.1, 0.1]}  position={[-3.5, 0.05, -1.65]}  /> */}

      </Canvas>
      <NavButtons showNavButtons={showNavButtons} />
      <Loader />
    </div>
  );
};

export default page;
