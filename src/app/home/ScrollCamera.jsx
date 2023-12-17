import React, {useRef, useEffect} from 'react'

import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei'

import * as THREE from 'three'

const ScrollCamera = () => {

    const camera = useRef();
    const scroll = useScroll();

    useEffect(() => {
        console.log(`Scroll offset: ${scroll.offset}`);
    }, [scroll]);

    useFrame((state, delta) => {
        camera.current.position.lerp(new THREE.Vector3(0, 0, scroll.offset), delta*24);
    });

  return (
    
    <ScrollControls style={{'height':'100%', 'width':'100%'}} pages={2} damping={0.1} >
        <ambientLight args={[50]} />
        <hemisphereLight args={[0xffffff, 0x080820, 1]} />
        <directionalLight position={[10, 10, 5]} intensity={10} color='blue' />
        <directionalLight position={[-1, 1, -5]} intensity={7} color='purple' />

        <axesHelper args={[50]} />
      <PerspectiveCamera ref={camera}  makeDefault position={[0, 0, 5]} fov={30} near={0.1} far={1000} />
    </ScrollControls>
    
  )
}

export default ScrollCamera