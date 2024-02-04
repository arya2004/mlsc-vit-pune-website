/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/avatar-platform.glb -o src/app/team/Components/AvatarPlatform.jsx 
Author: MRowa (https://sketchfab.com/MRowa)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/medium-show-room-59cf5de086154ea3a8c340078f5c7a79
Title: Medium Show Room
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AvatarPlatform(props) {
  const { nodes, materials } = useGLTF('/models/avatar-platform.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.MediumShowRoom_Foundation_Placeable_0.geometry} material={materials.Placeable} />
        <mesh geometry={nodes.MediumShowRoom_Body_Placeable_0.geometry} material={materials.Placeable} position={[0, 0, 1]} />
      </group>
    </group>
  )
}

useGLTF.preload('/avatar-platform.glb')
