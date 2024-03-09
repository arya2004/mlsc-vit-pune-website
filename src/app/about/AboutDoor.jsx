/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/door-to-about.glb -o ./src/app/about/AboutDoor.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AboutDoor(props) {
  const { nodes, materials } = useGLTF('/models/door-to-about.glb')
  return (
    <group {...props} dispose={null}>
      <color attach="background" args={['#000']} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.046}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={100}>
            <mesh geometry={nodes.portal_blocking_Material001_0.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.portal_blocking_Material001_0001.geometry} material={materials['Material.003']} />
          </group>
        </group>
      </group>
      <mesh geometry={nodes.Cube010_Material013_0001.geometry} material={materials['Material.013']} position={[2.915, -10.217, 77.06]} rotation={[-1.571, 0, -0.901]} scale={[-7.775, -7.743, -1.879]} />
    </group>
  )
}

useGLTF.preload('/models/door-to-about.glb')
