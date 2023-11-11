'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, Loader, OrbitControls } from '@react-three/drei'

import { CPUcase2 } from './components/CpuCase2'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Canvas style={{'width':'100vw', 'height':'100vh'}} camera={{ position: [0, 0, 5] }}>
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
    </main>
  )
}
