import React, { useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { Suspense } from "react";

import * as THREE from "three";
import RAPIER from "@dimforge/rapier3d-compat";

const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const direction = new THREE.Vector3();
// const rotation = new THREE.Vector3();

function MovingCamera() {
  const controls = useRef();
  console.log(controls);
  const [_, get] = useKeyboardControls();

  // const rapier = useRapier();

  useFrame((state, delta) => {
    const conCurr = controls.current;
    if (conCurr !== undefined) {
      state.camera.position.set(conCurr?.translation());

      const { forward, backward, left, right } = get();
      // console.log("FORWARD "+forward);
      // console.log("BACKWARD "+backward);
      // console.log("LEFT "+left);
      // console.log("RIGHT "+right);
      const velocity = conCurr?.linvel();

      // console.log(controls);
      console.log(velocity);

      frontVector.set(0, 0, backward - forward);
      sideVector.set(left - right, 0, 0);

      console.log(frontVector);

      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(5)
        // .applyEuler(state.camera.rotation);

        try {
          // conCurr?.setLinvel([0, 5, 15]);
        } catch (error) {
          console.error("Error setting linear velocity:", error);
        }
    }

    // const world = rapier.world.raw();
    // const ray = world?.castRay(
    //   new RAPIER.Ray(controls.current?.translation(), { x: 0, y: -1, z: 0 })
    // );
    // const ground = ray && ray.collider && Math.abs(ray.toi) <= 1.75;
  });

  return (
    // <PerspectiveCamera position={[1, 4, 2]} ref={controls} />

    <RigidBody
      type="dynamic"
      ref={controls}
      mass={1}
      position={[0, 10, 15]}
      restitution={0.3}
      colliders={false}
      enabledRotations={[false, false, false]}
    >
      <CapsuleCollider args={[0.75, 0.5]} />
      {/* <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh> */}
    </RigidBody>
  );
}

export default MovingCamera;
