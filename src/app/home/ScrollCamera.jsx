import React, { useRef, useEffect, use } from "react";

import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  ScrollControls,
  SpotLight,
  useScroll,
  Environment,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useMLSCStore } from "../store/MLSCStore";

import * as THREE from "three";

const ScrollCamera = () => {
  const camera = useRef();
  const lights = useRef();
  const center = useRef();

  const scroll = useScroll();

  const showMotherBoard = useMLSCStore((state) => state.showMotherBoard);
  const setShowMotherBoard = useMLSCStore((state) => state.setShowMotherBoard);

  useEffect(() => {
    console.log(`Scroll offset: ${scroll.offset}`);
    if (scroll.offset > 0.2 && !showMotherBoard) {
      setShowMotherBoard(true);
    }
  }, [scroll.offset]);

  useFrame((state, delta) => {
    camera.current.position.lerp(
      new THREE.Vector3(0, 0.04, 5 - scroll.offset * 5),
      delta * 24
    );
    lights.current.rotation.y += delta * 0.03;

    // console.log(`Scroll offset: ${scroll.offset}`);
    if (scroll.offset > 0.92) {
      setShowMotherBoard(true);
      // console.log(`Show motherboard: ${showMotherBoard}`)
    }
  });

  return (
    <>
      <ambientLight args={[100]} intensity={10} />
      <hemisphereLight args={[0xffffff, 0x080820, 1]} />
      {/* <directionalLight
        args={[0xffffff, 0.5]}
        intensity={10}
        position={[0, 5, 5]}
      /> */}

      {/* <Environment preset={'sunset'} blur={2} /> */}

      <group ref={center} position={[0, 0, 0]} />

      <group position={[0, 0, 0]} ref={lights}>
        {/* <SpotLight
          castShadow
          position={[-2, 1, 0.5]}
          color="purple"
          penumbra={0.8}
          radiusTop={0.01}
          radiusBottom={1.5}
          distance={5}
          angle={0.45}
          attenuation={20}
          anglePower={3}
          intensity={5}
          opacity={0.5}
        />

        <SpotLight
          castShadow
          position={[-0.5, 1.5, -2]}
          color="blue"
          penumbra={0.8}
          radiusTop={0.01}
          radiusBottom={1.5}
          distance={5}
          angle={0.45}
          attenuation={20}
          anglePower={3}
          intensity={5}
          opacity={0.5}
        /> */}

        {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, -0]}>
          <planeGeometry args={[5, 5]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh> */}

        {/* <spotLightHelper args={[lights.current.children[0]]} /> */}
        <directionalLight position={[3, 5, 5]} intensity={8} color='blue' castShadow />
        <directionalLight position={[-4, 5, -5]} intensity={7} color='purple' castShadow />
      </group>

      {/* <axesHelper args={[50]} /> */}
      <PerspectiveCamera
        ref={camera}
        makeDefault
        // lookAt={[0, 0.04, 0]}
        fov={30}
        near={0.01}
        far={1000}
      />
    </>
  );
};

export default ScrollCamera;
