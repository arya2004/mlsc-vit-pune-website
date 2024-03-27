import React, { useEffect } from 'react';
import {AboutBG} from './AboutBG'
import {EventCards} from './Cards'
import { useThree } from '@react-three/fiber';
import { useMLSCStore } from '../store/MLSCStore';

export default function AboutScene() {
    const sidebarOpen = useMLSCStore((state) => state.sidebarOpen);
    const regress = useThree((state) => state.performance.regress)
    useEffect(() => {
        if(sidebarOpen){
            regress(true)
        }else{
            regress(false)
        }
    }, [sidebarOpen])
    return (
        <>
         <ambientLight intensity={0.25} />
       
         <pointLight intensity={10} position={[-10, -10, -10]} />
         <directionalLight intensity={1} color='blue' position={[3, 2, 0]} />
         <directionalLight intensity={0.75} color='white' position={[0, 2, 3]} />
         <EventCards position={[0, 6, 0]} scale={1} />
         <AboutBG position={[0, -3, 0]} scale={[0.5, 0.5, 0.5]} />
        </>
    )
}