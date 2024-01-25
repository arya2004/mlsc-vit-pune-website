'use client'
import { Loader, OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import {Avatar} from './Avatar.jsx';


function Page() {
    return (
        <div>
            <Canvas style={{'width':'100w', 'height':'100vh'}} camera={{ position: [0, 1, 30], near: 0.05, far: 1000, fov: 50 }} >
                <OrbitControls />
                <color attach="background" args={['#000']} />
                <axesHelper args={[5]} />
                <Stage >
                    <Avatar scale={[0.002, 0.002, 0.002]} rotation={[0, 0, 0]} />
                </Stage>
            </Canvas>
            <Loader />
        </div>
    );
}

export default Page;