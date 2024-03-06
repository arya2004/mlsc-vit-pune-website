import React, { useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { Suspense } from "react";

import * as THREE from "three";
import RAPIER from "@dimforge/rapier3d-compat";
import TeleportAnim from "./TeleportAnim";

import {useMLSCStore} from "../../store/MLSCStore";

const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const direction = new THREE.Vector3();
// const rotation = new THREE.Vector3();

function MovingCamera({position}) {
  const controls = useRef();
  console.log(controls);
  const [_, get] = useKeyboardControls();

  const teleporting = useMLSCStore((s) => s.teleporting);

  const rapier = useRapier();

  const scene = useThree((state) => state.scene);
  
  
  useFrame((state, delta) => {
    const conCurr = controls.current;
    if (conCurr !== undefined) {
      
      const { forward, backward, left, right, jump } = get();
  
      const velocity = conCurr?.linvel();
      
      state.camera.position.set(conCurr?.translation().x, conCurr?.translation().y, conCurr?.translation().z);
      // console.log(controls);
      // console.log(velocity);

      frontVector.set(0, 0, backward - forward);
      sideVector.set(left - right, 0, 0);

      // console.log(frontVector);

      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(3)
        .applyEuler(state.camera.rotation);

        // console.log("direction", direction);
        
      controls.current?.setLinvel({x: direction.x, y: velocity.y, z: direction.z});

        // const world = rapier?.world;
        // const ray = world.castRay(
        //   new RAPIER.Ray(controls?.current?.translation(), { x: 0, y: -5, z: 0 }),
        //   10, true
        // );

        // const ground = ray && ray.collider && Math.abs(ray.toi) <= .75;
        // console.log(ray.toi);
      if (jump) controls.current?.setLinvel({ x: 0, y: 5, z: 0 });
      if(teleporting) {
        if(Math.floor(Math.sqrt(conCurr?.translation().x**2 + conCurr?.translation().z**2)) > 0){
          if(Math.floor(Math.sqrt(conCurr?.translation().x**2 + conCurr?.translation().z**2)) < 2)
            conCurr.setLinvel({x: -conCurr?.translation().x, y: 1, z: -conCurr?.translation().z});
          conCurr.setLinvel({x: -conCurr?.translation().x, y: 0, z: -conCurr?.translation().z});
        }else {
          conCurr?.setLinvel({x: 0, y: 1, z: 0});
        
        }
      }
      console.log("translation", conCurr?.translation());
        
    }

  });

  return (
    // <PerspectiveCamera position={[1, 4, 2]} ref={controls} />
    <group>
      {teleporting && <TeleportAnim position={[0, 0, 0]} />}
      <RigidBody
        type="dynamic"
        ref={controls}
        mass={5}
        position={position}
        restitution={0.3}
        colliders={false}
        enabledRotations={[false, false, false]}
        canSleep={false}
      >
        <CapsuleCollider args={[0.75, 1.2]} />
        {/* <axesHelper args={[50]} /> */}
      </RigidBody>
    </group>
  );
}

export default MovingCamera;
