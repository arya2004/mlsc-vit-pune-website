import React, { useRef } from "react";
import { SpotLight, useDepthBuffer } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { BoxGeometry } from "three";
import { randFloat, randFloatSpread, randInt } from "three/src/math/MathUtils";
import * as THREE from "three";

export default function TeleportAnim({ position, targetPos, ref }) {
  const partilcleProperties = [];

  const depthBuffer = useDepthBuffer();
  const spotLight = useRef();

  for (let index = 0; index < 500; index++) {
    const posy = randFloat(-5, 10);
    const posx = randFloat(-1, 1);
    const posz = randFloat(-1, 1);
    const particleRef = useRef();
    partilcleProperties[index] = {
      position: [posx, posy, posz],
      ref: particleRef,
    };
  }

  useFrame((state, delta) => {
    spotLight.current.target.position.set(position[0], -5, position[2])

    console.log("SPOTLIGHT",spotLight.current);
    
    if(spotLight.current.distance < 20) {
      spotLight.current.distance += 1;
    }

    partilcleProperties.forEach((particle) => {
      particle.ref.current.position.y += 0.1;
      if (particle.ref.current.position.y > 10) {
        particle.ref.current.position.y = -5;
        particle.ref.current.position.x = randFloat(-1, 1);
        particle.ref.current.position.z = randFloat(-1, 1);
      }
    });
  });

  return (
    <group position={position} ref={ref}>
      <SpotLight
        ref={spotLight}
        position={[0, 10, 0]}
        penumbra={0.5}
        color="#2879ff"
        distance={15}
        attenuation={25}
        radiusTop={1.5}
        radiusBottom={1.5}
        opacity={1}
      />
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
