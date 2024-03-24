/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/sci-fi_platform_copied.glb -o ./src/app/team/domain/core-team/CoreTeamScene 
Author: DCC (https://sketchfab.com/15589)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-platform-copied-af9239d1873f4aa2ab020f34d1ee0110
Title: Sci-fi platform (copied)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TeamBGScene(props) {
  const { nodes, materials } = useGLTF('/models/sci-fi_platform_copied.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh receiveShadow geometry={nodes.Object_8.geometry} material={materials.Black} position={[-226.264, 508.734, 303.999]} />
          <mesh receiveShadow geometry={nodes.Object_11.geometry} material={materials['Black-Wall']} position={[-226.264, 508.734, 303.999]} />
          <mesh receiveShadow geometry={nodes.Object_14.geometry} material={materials['Black-Upper']} position={[-226.264, 508.734, 303.999]} />
          <mesh receiveShadow geometry={nodes.Object_17.geometry} material={materials.Emissive_Cyan__0} position={[-113.132, 107.464, 152]} />
          <mesh receiveShadow geometry={nodes.Object_20.geometry} material={materials['Emissive-Red']} position={[4.632, 438.369, 303.999]} />
          <mesh receiveShadow geometry={nodes.Object_23.geometry} material={materials['Light-Upper']} position={[-461.792, 451.184, 32.134]} />
          <mesh receiveShadow geometry={nodes.Object_26.geometry} material={materials.Emissive_Cyan__0} position={[0, 474.314, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/sci-fi_platform_copied.glb')