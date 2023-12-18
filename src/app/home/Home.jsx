'use client'
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Loader, ScrollControls } from '@react-three/drei'

import { CPUcase2 } from '../components/CpuCase2'
import ScrollCamera from './ScrollCamera'



const Home = () => {    

  return (
    <div className='h-100vh w-100vh'>
      <Canvas style={{'width':'100vw', 'height':'100vh'}} camera={{ position: [0, 0, 5], near: 0.1, far: 1000, fov: 10 }}>
        {/* <OrbitControls enableZoom={false} /> */}
        
        <ScrollControls  pages={2} damping={0.1} >
          <ScrollCamera />   
        </ScrollControls>     
        
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