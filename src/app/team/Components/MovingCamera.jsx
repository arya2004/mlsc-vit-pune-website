import React, { useRef } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";

import * as THREE from "three";
import RAPIER from "@dimforge/rapier3d-compat";

const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const direction = new THREE.Vector3();
const rotation = new THREE.Vector3();

function MovingCamera() {
  const controls = useRef();
  const [, get] = useKeyboardControls();

  const rapier = useRapier();

  useFrame((state, delta) => {
    state.camera.position.set(controls.current.translation());

    const { forward, backward, left, right } = get();
    const velocity = controls.current.linvel();
    console.log(controls);
    // console.log(velocity);

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(5)
      .applyEuler(state.camera.rotation);

    controls.current.setLinvel([direction.x, velocity.y, direction.z]);

    const ray = rapier.world.castRay(
      new RAPIER.Ray(controls.current.translation(), { x: 0, y: -1, z: 0 })
    );
    const ground = ray && ray.collider && Math.abs(ray.toi) <= 1.75;
  });

  return (
    // <PerspectiveCamera position={[1, 4, 2]} ref={controls} />
    <>
      <RigidBody
        type='dynamic'
        ref={controls}
        mass={1}
        position={[0, 25, 0]}
        
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
    </>
  );
}

export default MovingCamera;
