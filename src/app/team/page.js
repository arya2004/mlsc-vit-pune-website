"use client";

import {
  Clouds,
  Cloud,
  Environment,
  OrbitControls,
  Loader,
  Sphere,
  Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";

import { Background } from "./Components/Background.jsx";
import {
  EffectComposer,
  GodRays,
  Glitch,
  Noise,
  LensFlare,
  Scanline,
} from "@react-three/postprocessing";

// import BlendFunction from "postprocessing";

import * as THREE from "three";

const page = () => {
  const sun = useRef();

  const backgroundColors = useRef({
    colorB: "#61b0ed",
    colorA: "#001e4e",
  });

  return (
    <div className="w-screen h-screen bg-transparent">
      <Canvas style={{ height: "100%", width: "100%" }}>
        <OrbitControls />
        {/* <Environment files='/environments/motherboard-bg.hdr' background /> */}
        <Background backgroundColors={backgroundColors} />

        <ambientLight intensity={1} />
        <directionalLight color="white" position={[5, 10, 0]} intensity={2} />
        <directionalLight color="purple" position={[0, -10, 0]} intensity={2} />

        {/* <Sphere ref={sun} position={[5, 5, 0]} color="orange" scale={1} /> */}

        <Stars radius={150} depth={100} count={200} factor={4} saturation={0} speed={1} />

        <Clouds>
          <Cloud
            segments={80}
            bounds={[10, 2, 10]}
            concentrate="outside"
            position={[0, -20, 0]}
            color="#f0b1fa"
            volume={8}
            scale={32}
            speed={0.05}
            growth={2}
          />
        </Clouds>

        <EffectComposer>
          {/* <Scanline
            density={1.5 } // scanline density

          /> */}
          {/* <GodRays
            sun={new THREE.Vector3(0, 0, 0)}
            blendFunction={BlendFunction.Screen} // The blend function of this effect.
            samples={60} // The number of samples per pixel.
            density={0.96} // The density of the light rays.
            decay={0.9} // An illumination decay factor.
            weight={0.4} // A light ray weight factor.
            exposure={0.6} // A constant attenuation coefficient.
            clampMax={1} // An upper bound for the saturation of the overall effect.
            width={Resizer.AUTO_SIZE} // Render width.
            height={Resizer.AUTO_SIZE} // Render height.
            kernelSize={KernelSize.SMALL} // The blur kernel size. Has no effect if blur is disabled.
            blur={true}
          /> */}
          <Noise opacity={0.1} />
        </EffectComposer>
      </Canvas>
      <Loader />
    </div>
  );
};

export default page;
