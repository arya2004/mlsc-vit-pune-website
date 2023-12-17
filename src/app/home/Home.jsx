'use client'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Loader } from '@react-three/drei'

import { CPUcase2 } from '../components/CpuCase2'



const Home = () => {
  return (
    <div className='h-100vh w-100vh'>
      <Canvas style={{'width':'100vw', 'height':'100vh'}} camera={{ position: [0, 0, 5], near: 0.1, far: 1000, fov: 10 }}>
        <OrbitControls />
        <ambientLight args={[50]} />
        <hemisphereLight args={[0xffffff, 0x080820, 1]} />
        <directionalLight position={[10, 10, 5]} intensity={10} color='blue' />
        <directionalLight position={[-1, 1, -5]} intensity={7} color='purple' />
        
        
        {/* <Environment preset="warehouse" /> */}


        <Suspense >
          <CPUcase2 position={[0, -0.5, 0]} />   
        </Suspense>     
      </Canvas>
      <Loader />
    </div>
  )
}

export default Home