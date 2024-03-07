import React, { useRef, useState } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, useRapier } from "@react-three/rapier";
import { Suspense } from "react";
import { degToRad, radToDeg } from "three/src/math/MathUtils";

import * as THREE from "three";
import RAPIER from "@dimforge/rapier3d-compat";
import TeleportAnim from "./TeleportAnim";

import {useMLSCStore} from "../../store/MLSCStore";

const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const direction = new THREE.Vector3();
// const rotation = new THREE.Vector3();

function MovingCamera({teleporting, position, setTeleporting}) {

  const controls = useRef();
  console.log(controls);
  const [_, get] = useKeyboardControls();

  // const teleporting = useMLSCStore((s) => s.teleporting);
  // const setTeleporting = useMLSCStore((s) => s.setTeleporting);
  const [portalPos, setPortalPos] = useState([0,0,0]);

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
        //   new RAPIER.Ray(controls?.current?.translation(), { x: 0, y: -10, z: 0 }),
        //   10, true
        // );

        // const ground = ray && ray.collider && Math.abs(ray.toi) <= .75;
        // console.log(ray.toi);
      if (jump) controls.current?.setLinvel({ x: direction.x, y: 5, z: direction.z });

      /*When clicked on the any button on sidebar, camera will be dragged to the center of the scene and portal will suck it to another location */
      if(teleporting) {
        if(Math.floor(Math.sqrt(conCurr?.translation().x**2 + conCurr?.translation().z**2)) < 4)
          conCurr.setLinvel({x: -conCurr?.translation().x, y: 1, z: -conCurr?.translation().z});
        else if(Math.floor(Math.sqrt(conCurr?.translation().x**2 + conCurr?.translation().z**2)) > 0)
          conCurr.setLinvel({x: -conCurr?.translation().x, y: 2, z: -conCurr?.translation().z});
      }

      // console.log("Distance", Math.floor(Math.sqrt(conCurr?.translation().x**2 + conCurr?.translation().z**2)));

      /*When the camera reaches near any domain portal, this will drag the camera into the portal */
      if(Math.floor(Math.sqrt(conCurr?.translation().x**2 + conCurr?.translation().z**2)) >= 25)
        setTeleporting(true);
      if(Math.floor(Math.sqrt(conCurr?.translation().x**2 + conCurr?.translation().z**2)) >= 31){
  
        const theta = radToDeg(Math.atan2(conCurr?.translation().z, conCurr?.translation().x));



        if(theta > 20-10 && theta < 20+10){
          setPortalPos([34*Math.cos(degToRad(20)), 0, 34*Math.sin(degToRad(20))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(20))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(20))-conCurr?.translation().z});
        } else if (theta > 56-10 && theta < 56+10){
          setPortalPos([34*Math.cos(degToRad(56)), 0, 34*Math.sin(degToRad(56))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(56))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(56))-conCurr?.translation().z});
        } else if (theta > 92-10 && theta < 92+10){
          setPortalPos([34*Math.cos(degToRad(92)), 0, 34*Math.sin(degToRad(92))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(92))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(92))-conCurr?.translation().z});
        } else if (theta > 128-10 && theta < 128+10){
          setPortalPos([34*Math.cos(degToRad(128)), 0, 34*Math.sin(degToRad(128))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(128))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(128))-conCurr?.translation().z});
        } else if (theta > 164-10 && theta < 164+10){
          setPortalPos([34*Math.cos(degToRad(164)), 0, 34*Math.sin(degToRad(164))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(164))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(164))-conCurr?.translation().z});
        } else if (theta > (200-10-360) && theta < (200+10-360)){
          setPortalPos([34*Math.cos(degToRad(200)), 0, 34*Math.sin(degToRad(200))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(200))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(200))-conCurr?.translation().z});
        } else if (theta > (236-10-360) && theta < (236+10-360)){
          setPortalPos([34*Math.cos(degToRad(236)), 0, 34*Math.sin(degToRad(236))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(236))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(236))-conCurr?.translation().z});
        } else if (theta > (272-10-360) && theta < (272+10-360)){
          setPortalPos([34*Math.cos(degToRad(272)), 0, 34*Math.sin(degToRad(272))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(272))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(272))-conCurr?.translation().z});
        } else if (theta > (308-10-360) && theta < (308+10-360)){
          setPortalPos([34*Math.cos(degToRad(308)), 0, 34*Math.sin(degToRad(308))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(308))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(308))-conCurr?.translation().z});
        } else if (theta > (344-10-360) && theta < (344+10-360)){
          setPortalPos([34*Math.cos(degToRad(344)), 0, 34*Math.sin(degToRad(344))]);
          conCurr.setLinvel({x: 34*Math.cos(degToRad(344))-conCurr?.translation().x, y: 1, z: 34*Math.sin(degToRad(344))-conCurr?.translation().z});
        }

      }        
    }

  });

  return (
    // <PerspectiveCamera position={[1, 4, 2]} ref={controls} />
    <group>
      {teleporting && <TeleportAnim position={portalPos} />}
      
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
