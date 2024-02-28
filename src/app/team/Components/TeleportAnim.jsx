import React, { useRef } from "react";
import { SpotLight, useDepthBuffer } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BoxGeometry } from "three";
import { randFloat, randFloatSpread, randInt } from "three/src/math/MathUtils";
import * as THREE from "three";

export default function TeleportAnim({ position, ref }) {
  const partilcleProperties = [];

  const depthBuffer = useDepthBuffer();

  for (let index = 0; index < 500; index++) {
    const posy = randFloat(-5, 5);
    const posx = randFloat(-1, 1);
    const posz = randFloat(-1, 1);
    const particleRef = useRef();
    partilcleProperties[index] = {
      position: [posx, posy, posz],
      ref: particleRef,
    };
  }

  useFrame((state, delta) => {
    partilcleProperties.forEach((particle) => {
      particle.ref.current.position.y += 0.1;
      if (particle.ref.current.position.y > 5) {
        particle.ref.current.position.y = -5;
        particle.ref.current.position.x = randFloat(-1, 1);
        particle.ref.current.position.z = randFloat(-1, 1);
      }
    });
  });

  return (
    <group position={position} ref={ref}>
      {/* <SpotLight
        position={[0, 5, 0]}
        color="#2879ff"
        shadow-mapSize-width={1024}
        distance={10}
        attenuation={15}
        radiusTop={1.5}
        radiusBottom={1.5}
        customDepthMaterial={depthBuffer.material}
      /> */}
      {partilcleProperties.map((particle, index) => {
        return (
          <mesh
            key={index}
            scale={[0.1, 0.1, 0.1]}
            ref={particle.ref}
            position={particle.position}
          >
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshStandardMaterial
              emissive="#2879ff"
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}
