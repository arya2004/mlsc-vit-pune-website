import { Html, Text } from "@react-three/drei";
import { degToRad, radToDeg } from "three/src/math/MathUtils";


function EventCard({text, position, scale, rotation}){
    return (
        // <Text position={position} rotation={rotation} >
        //     {text}
        // </Text>
        <Html transform occlude position={position} scale={scale} rotation={rotation} >
            <div className="flex items-center w-full h-full p-2 justify-center bg-[#1833547a] rounded-[1px] border-[#162f4b]">
                <div className="text-lxl font-bold align-middle text-[#65a8d2] " ></div>
            </div>
        </Html>
    )
}

export function EventCards({position, scale,}){
    return (
        <group position={position} >
            <EventCard position={[18*Math.cos(degToRad(30)),  -5, 18*Math.sin(degToRad(30))]}  scale={scale} rotation={[0, degToRad(60), 0]} />
            <EventCard position={[18*Math.cos(degToRad(60)),  -5, 18*Math.sin(degToRad(60))]}  scale={scale} rotation={[0, degToRad(30), 0]} />
            <EventCard position={[18*Math.cos(degToRad(120)),  -5, 18*Math.sin(degToRad(120))]}  scale={scale} rotation={[0, degToRad(-30), 0]} />
            <EventCard position={[18*Math.cos(degToRad(150)), -5, 18*Math.sin(degToRad(150))]} scale={scale} rotation={[0, degToRad(-60), 0]} />
            <EventCard position={[18*Math.cos(degToRad(210)), -5, 18*Math.sin(degToRad(210))]} scale={scale} rotation={[0, degToRad(60), 0]} />
            <EventCard position={[18*Math.cos(degToRad(240)), -5, 18*Math.sin(degToRad(240))]} scale={scale} rotation={[0, degToRad(30), 0]} />
            <EventCard position={[18*Math.cos(degToRad(300)), -5, 18*Math.sin(degToRad(300))]} scale={scale} rotation={[0, degToRad(-30), 0]} />
            <EventCard position={[18*Math.cos(degToRad(330)), -5, 18*Math.sin(degToRad(330))]} scale={scale} rotation={[0, degToRad(-60), 0]} />        
        </group>
    )
}


export function BlogCard({text, position, scale, rotation}){
    return (
        <Html transform occlude position={position} scale={scale} rotation={rotation} >
            <div className="flex items-center w-20 h-20 p-2 justify-center bg-[#0d38539a] rounded-[12px] ">
                <div className="text-xs font-bold align-middle text-[#65a8d2] " >Loading</div>
            </div>
        </Html>
    )
}

export function ProjectCard({text, position, scale, rotation}){
    return (
        <Html transform occlude position={position} scale={scale} rotation={rotation} >
            <div className="flex items-center w-20 h-20 p-2 justify-center bg-[#0d38539a] rounded-[12px]">
                <div className="text-xs font-bold align-middle text-[#65a8d2] " >Loading</div>
            </div>
        </Html>
    )
}
