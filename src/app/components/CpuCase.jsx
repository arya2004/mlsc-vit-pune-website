"use client";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/chosen-cpu-case1.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function CPUcase(props) {
  const { nodes, materials } = useGLTF("/models/chosen-cpu-case1.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.089}>
        {/* <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.blinn16SG}
        /> */}
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.blinn18SG}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.blinn21SG}
        />
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.blinn17SG}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.blinn5SG}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.lambert11SG}
        />
        <mesh
          geometry={nodes.Object_27.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials.lambert31SG}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials.lambert32SG}
        />
        <mesh
          geometry={nodes.Object_35.geometry}
          material={materials.lambert33SG}
        />
        <mesh
          geometry={nodes.Object_37.geometry}
          material={materials.lambert37SG}
        />
        <mesh
          geometry={nodes.Object_38.geometry}
          material={materials.lambert38SG}
        />
        {/* <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.lambert19SG}
        /> */}
      </group>
    </group>
  );
}

useGLTF.preload("/models/chosen-cpu-case1.glb");