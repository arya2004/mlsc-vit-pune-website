"use client";

import { Loader, OrbitControls, Stage, AccumulativeShadows, RandomizedLight, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Avatar } from "./Avatar.jsx";
import { AvatarPlatform } from "../../Components/AvatarPlatform.jsx"

function Page() {
  return (
    <>
      <Canvas
        style={{ width: "100w", height: "100vh" }}
        // camera={{ position: [0, 1.8, 6], target: [0, 3, 0], near: 0.05, far: 50, fov: 50 }}
        shadows='soft'
      >
        {/* <OrbitControls /> */}
        <PerspectiveCamera makeDefault position={[0, 1.5, 6]} lookAt={[0, .5, 0]} near={0.05} far={50} fov={50} />
        <color attach="background" args={["#010114"]} />

        {/* <ambientLight intensity={3} /> */}
        <directionalLight position={[0, 2, 5]} color='#88b6f5' intensity={5} castShadow />
        <axesHelper args={[5]} />

        <AvatarPlatform scale={[.002, .002, .002]} position={[0, 0, 0]} />
        <AccumulativeShadows receiveShadow color="#010114"  temporal frames={100} scale={50} colorBlend={2} toneMapped={true} alphaTest={0.75} opacity={2}>
          <RandomizedLight intensity={Math.PI} radius={4} amount={8} ambient={0.5} bias={0.001} position={[5, -1, -10]} />
        </AccumulativeShadows> 

        <Avatar position={[0, .4, 0]} rotation={[0, 0, 0]} />
      </Canvas>
      <Loader />
      </>
  );
}

export default Page;
