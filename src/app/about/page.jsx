'use client'

import { Canvas } from "@react-three/fiber"
import { Lightformer, Loader, MeshPortalMaterial, OrbitControls } from '@react-three/drei'

import AboutScene from './AboutScene' 
import {AboutDoor} from './AboutDoor'
import { LantainGate } from './LantainPortal'

import * as THREE from 'three'
import { degToRad } from "three/src/math/MathUtils"


export default function About() {
  return (
    <>
    <Canvas shadows='basic' dpr={[0.1, 10]} >
      <OrbitControls />
       <color attach="background" args={['#fff']} />
        <directionalLight position={[3, 3, 0]} intensity={5} color='white' />
          {/* <AboutScene /> */}
        <group >
          
          <LantainGate position={[1, 1, 1]} scale={10} />
          <AboutDoor rotation={[0, Math.PI/6+degToRad(5), 0]} scale={[0.2, 0.2, 0.2]} position={[-0.2, -2, 0.7]} />
        </group>
    </Canvas>
    <Loader />
    </>
  )
}