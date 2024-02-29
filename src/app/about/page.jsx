'use client'

import { Canvas } from "@react-three/fiber"
import { Lightformer, Loader, OrbitControls } from '@react-three/drei'

import {AboutBG} from './AboutBG'




export default function About() {
  return (
    <>
    <Canvas shadows='basic' dpr={[0.1, 10]} >
      <OrbitControls />
       <color attach="background" args={['#000']} />
        <ambientLight intensity={0.25} />
       
        <pointLight intensity={10} position={[-10, -10, -10]} />
        <directionalLight intensity={1} color='blue' position={[3, 2, 0]} />
        <directionalLight intensity={0.75} color='white' position={[0, 2, 3]} />

      <AboutBG position={[0, -2, 0]} scale={[0.5, 0.5, 0.5]} />
        
    </Canvas>
    <Loader />
    </>
  )
}