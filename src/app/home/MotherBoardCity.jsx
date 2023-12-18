'use client'

import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import { Box, MeshDistortMaterial, MeshReflectorMaterial, OrbitControls, ScrollControls } from '@react-three/drei'
import { MotherBoard } from '../components/Motherboard'
import { MeshStandardMaterial } from 'three'
import ExploreCamera from './ExploreCamera'

const page = () => {
  return (
    <Canvas style={{'height':'100vh', 'width':'100vw'}}  camera={{ position: [0, 0, 30], near: 0.05, far: 1000, fov: 10 }} >
      {/* <OrbitControls /> */}

        <ambientLight intensity={5} />
        <spotLight position={[10, 10, 10]} angle={0.15} color='red' penumbra={1} />
        <directionalLight position={[0, 10, 5]} intensity={5} />


        <axesHelper args={[50]} />
        <gridHelper args={[50, 50]} />

        <ScrollControls pages={5} damping={0.1} >
          <ExploreCamera  />
        </ScrollControls>
        
        <Suspense >
          <MotherBoard rotation={[Math.PI/2, Math.PI, -Math.PI/2]} />
        </Suspense>
        
        {/* <Box material-color='red' args={[0.1, 0.1, 0.1]}  position={[-3.5, 0.05, -1.65]}  /> */}

    </Canvas>
  )
}

export default page