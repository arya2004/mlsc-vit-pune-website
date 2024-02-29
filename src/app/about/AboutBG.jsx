/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/about-scene.glb -o ./src/app/about/AboutBG.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { BlogCard, ProjectCard } from './Cards'

export function AboutBG(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/about-scene.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0, 1.964, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.007} />
        <group name="b10b0b2d3f0741fa8ef24abb7586b618fbx" rotation={[Math.PI / 2, 0, 0]} />
        <group name="Object_2" />
        
        <group name="holo_room" position={[0, -66.659, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 40]}>
          <mesh name="holo_room_Blue_Emission_0" geometry={nodes.holo_room_Blue_Emission_0.geometry} material={materials.Blue_Emission} position={[0, 0, 1.857]} scale={0.032} />
          <mesh name="holo_room_metal2_0" geometry={nodes.holo_room_metal2_0.geometry} material={materials.metal2} position={[0, 0, 1.857]} scale={0.032} />
          <mesh name="holo_room_metal3_0" geometry={nodes.holo_room_metal3_0.geometry} material={materials.metal3} position={[0, 0, 1.857]} scale={0.032} />
          <mesh name="holo_room_metal4_0" geometry={nodes.holo_room_metal4_0.geometry} material={materials.metal4} position={[0, 0, 1.857]} scale={0.032} />
          <mesh name="holo_room_metal_0" geometry={nodes.holo_room_metal_0.geometry} material={materials.metal} position={[0, 0, 1.857]} scale={0.032} />
          <mesh name="holo_room_Orange_Emission_0" geometry={nodes.holo_room_Orange_Emission_0.geometry} material={materials.Orange_Emission} position={[0, 0, 1.857]} scale={0.032} />
          <mesh name="holo_room_Purple_Emission_0" geometry={nodes.holo_room_Purple_Emission_0.geometry} material={materials.Purple_Emission} position={[0, 0, 1.857]} scale={0.032} />
          <mesh name="holo_room_Yellow_Emission_0" geometry={nodes.holo_room_Yellow_Emission_0.geometry} material={materials.Yellow_Emission} position={[0, 0, 1.857]} scale={0.032} />
        </group>
        <group name="boards" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <group name="boards_Blue_Emission_0" />
          <group name="boards_metal_0" />
        </group>
        <group name="rings" position={[0, 88.768, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={172.427} />
        <group name="Empty" position={[0, 10, 0]} rotation={[0, 1.012, 0]} />
        <group name="boards_metal_0001" position={[2.507, 19.282, 2.708]}>
          <mesh name="boards_metal_0001_1" geometry={nodes.boards_metal_0001_1.geometry} material={materials.metal} />
          <mesh name="boards_metal_0001_2" geometry={nodes.boards_metal_0001_2.geometry} material={materials.Blue_Emission} />
        </group>
        <group name="boards_metal_0002" position={[0.721, 29.333, 1.475]}>
          <mesh name="boards_metal_0002_1" geometry={nodes.boards_metal_0002_1.geometry} material={materials.metal} />
          <mesh name="boards_metal_0002_2" geometry={nodes.boards_metal_0002_2.geometry} material={materials.Blue_Emission} />
        </group>
        <group name="boards_metal_0007" position={[0.405, 24.489, 3.144]}>
          <mesh name="boards_metal_0007_1" geometry={nodes.boards_metal_0007_1.geometry} material={materials.metal} />
          <mesh name="boards_metal_0007_2" geometry={nodes.boards_metal_0007_2.geometry} material={materials.Blue_Emission} />
        </group>
        <group name="boards_Blue_Emission_0001" position={[-0.402, 18.087, 1.307]}>
          <mesh name="boards_Blue_Emission_0001_1" geometry={nodes.boards_Blue_Emission_0001_1.geometry} material={materials.Blue_Emission} />
          <mesh name="boards_Blue_Emission_0001_2" geometry={nodes.boards_Blue_Emission_0001_2.geometry} material={materials.metal} />
        </group>
        <group name="boards_Blue_Emission_0004" position={[-2.815, 2.411, 3.272]}>
          <mesh name="boards_Blue_Emission_0004_1" geometry={nodes.boards_Blue_Emission_0004_1.geometry} material={materials.Blue_Emission} />
          <mesh name="boards_Blue_Emission_0004_2" geometry={nodes.boards_Blue_Emission_0004_2.geometry} material={materials.metal} />
        </group>
        <group name="boards_Blue_Emission_0005" position={[-5.226, 24.482, 4.578]}>
          <mesh name="boards_Blue_Emission_0005_1" geometry={nodes.boards_Blue_Emission_0005_1.geometry} material={materials.Blue_Emission} />
          <mesh name="boards_Blue_Emission_0005_2" geometry={nodes.boards_Blue_Emission_0005_2.geometry} material={materials.metal} />
        </group>
        <group name="boards_Blue_Emission_0006" position={[-3.516, 22.625, 3.837]}>
          <mesh name="boards_Blue_Emission_0006_1" geometry={nodes.boards_Blue_Emission_0006_1.geometry} material={materials.Blue_Emission} />
          <mesh name="boards_Blue_Emission_0006_2" geometry={nodes.boards_Blue_Emission_0006_2.geometry} material={materials.metal} />
        </group>
        <group name="boards_Blue_Emission_0008" position={[1.1, 3.836, 3.344]}>
          <mesh name="boards_Blue_Emission_0008_1" geometry={nodes.boards_Blue_Emission_0008_1.geometry} material={materials.Blue_Emission} />
          <mesh name="boards_Blue_Emission_0008_2" geometry={nodes.boards_Blue_Emission_0008_2.geometry} material={materials.metal} />
        </group>
        <group name="boards_Blue_Emission_0010" position={[3.33, 23.364, -3.446]}>
          <mesh name="boards_Blue_Emission_0010_1" geometry={nodes.boards_Blue_Emission_0010_1.geometry} material={materials.Blue_Emission} />
          <mesh name="boards_Blue_Emission_0010_2" geometry={nodes.boards_Blue_Emission_0010_2.geometry} material={materials.metal} />
        </group>
        <group name="boards_Blue_Emission_0011" position={[6.939, 7.188, -0.108]} rotation={[2.298, -1.242, 1.146]} scale={1.294}>
          <BlogCard rotation={[-0.06, 3.5, -1.09]} scale={1} />
          <mesh name="boards_Blue_Emission_0011_1" geometry={nodes.boards_Blue_Emission_0011_1.geometry} material={materials.Blue_Emission} />
          <mesh name="boards_Blue_Emission_0011_2" geometry={nodes.boards_Blue_Emission_0011_2.geometry} material={materials.metal} />
        </group>
        <group name="boards_Blue_Emission_0002" position={[6.939, 7.188, -0.108]} rotation={[2.298, -1.242, 1.146]} scale={1.294}>
          <mesh name="boards_Blue_Emission_0012" geometry={nodes.boards_Blue_Emission_0012.geometry} material={materials.Blue_Emission} />
          <mesh name="boards_Blue_Emission_0012_1" geometry={nodes.boards_Blue_Emission_0012_1.geometry} material={materials.metal} />
        </group>
        <group name="boards_Blue_Emission_0003" position={[-6.669, 7.188, -0.108]} rotation={[-0.67, -1.292, 1.311]} scale={1.294}>
          <ProjectCard rotation={[-0.03, 0.4, -2.06]} scale={1} />
          <mesh name="boards_Blue_Emission_0013" geometry={nodes.boards_Blue_Emission_0013.geometry} material={materials.Blue_Emission} />
          <mesh name="boards_Blue_Emission_0013_1" geometry={nodes.boards_Blue_Emission_0013_1.geometry} material={materials.metal} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/about-scene.glb')
