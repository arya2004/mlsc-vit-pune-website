'use client'

import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState, useEffect } from 'react'

import { Box, Cloud, Clouds, Environment, Loader, MeshDistortMaterial, MeshReflectorMaterial, OrbitControls, ScrollControls, Sky, Sparkles, SpotLight } from '@react-three/drei'
import { MotherBoard } from '../components/Motherboard'
import { MeshStandardMaterial } from 'three'
import ExploreCamera from './ExploreCamera'
import BeforeMotherBoard from './BeforeMotherBoard'

const page = () => {

  const [isCloudResourceAvailable, setIsCloudResourceAvailable] = useState(false);

useEffect(() => {
    fetch('https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png:')
        .then(response => {
            if (response.ok) {
                setIsCloudResourceAvailable(true);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}, []);

  return (
    <>
    <Canvas style={{'height':'100vh', 'width':'100vw'}}  camera={{ position: [0, 0, 30], near: 0.05, far: 1000, fov: 10 }} >
      {/* <OrbitControls /> */}

        {/* <ambientLight intensity={5} /> */}
        <color attach='background' args={['black']} />
        <spotLight position={[10, 10, 10]} angle={0.15} color='red' penumbra={1} />
        {/* <directionalLight position={[0, 10, 5]} intensity={1} /> */}
        <directionalLight position={[5, 5, -3]} color='purple' intensity={2} />
        <directionalLight position={[5, 5, 5]} color='#0078d4' intensity={4} />

        {/* <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.1} /> */}
        {/* <SpotLight position={[0, 5, 5]} angle={Math.PI/6} color='red' intensity={5} opacity={0.8} penumbra={0.8} distance={12} /> */}

        {/* <Environment preset='city' /> */}

        {isCloudResourceAvailable && <Cloud color='grey' opacity={0.5} />}
        <Sparkles scale={6} size={1} speed={0.5} noise={0.3}  color='purple' />

        <axesHelper args={[50]} />
        <gridHelper args={[50, 50]} />

        <ScrollControls pages={10} damping={0.3} >
          <ExploreCamera  />
        </ScrollControls>
        
        <Suspense fallback={<BeforeMotherBoard />} >
          <MotherBoard rotation={[Math.PI/2, Math.PI, -Math.PI/2]} />
        </Suspense>
        
        {/* <Box material-color='red' args={[0.1, 0.1, 0.1]}  position={[-3.5, 0.05, -1.65]}  /> */}

    </Canvas>
    <Loader />
    </>
  )
}

export default page