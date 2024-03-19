import React from 'react';
import {AboutBG} from './AboutBG'
import {EventCards} from './Cards'

export default function AboutScene() {
    return (
        <>
         <ambientLight intensity={0.25} />
       
         <pointLight intensity={10} position={[-10, -10, -10]} />
        <directionalLight intensity={1} color='blue' position={[3, 2, 0]} />
         <directionalLight intensity={0.75} color='white' position={[0, 2, 3]} />
         <EventCards position={[0, 6, 0]} scale={[15, 10, 1]} />
         <AboutBG position={[0, -3, 0]} scale={[0.5, 0.5, 0.5]} />
        </>
    )
}