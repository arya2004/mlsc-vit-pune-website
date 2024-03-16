import { Html, Text } from "@react-three/drei";
import { degToRad, radToDeg } from "three/src/math/MathUtils";


function DomainLabel({text, position, scale, rotation}){
    return (
        // <Text position={position} rotation={rotation} >
        //     {text}
        // </Text>
        <Html transform occlude position={position} scale={scale} rotation={rotation} >
            <div className="flex items-center p-2 justify-center bg-[#10a9f06c] rounded-[8px] border-2 border-[#1c485c]">
                <div className="text-lxl font-bold align-middle text-[#65a8d2] " >{text}</div>
            </div>
        </Html>
    )
}

export default function DomainLabels({}){
    return (
        <>
            <DomainLabel position={[12*Math.cos(degToRad(20)),  -5, 12*Math.sin(degToRad(20))]}  scale={[0.5, 0.5, 0.5]} rotation={[0, -Math.PI/1.75, 0]} text={'Core Team'} />
            <DomainLabel position={[12*Math.cos(degToRad(56)),  -5, 12*Math.sin(degToRad(56))]}  scale={[0.5, 0.5, 0.5]} rotation={[0, degToRad(210), 0]} text={'Event \nManagement'} />
            <DomainLabel position={[12*Math.cos(degToRad(92)),  -5, 12*Math.sin(degToRad(92))]}  scale={[0.5, 0.5, 0.5]} rotation={[0, degToRad(180), 0]} text={'Community \nManagement'} />
            <DomainLabel position={[12*Math.cos(degToRad(128)), -5, 12*Math.sin(degToRad(128))]} scale={[0.5, 0.5, 0.5]} rotation={[0, degToRad(140), 0]} text={'Partnership \nManagement'} />
            <DomainLabel position={[12*Math.cos(degToRad(164)), -5, 12*Math.sin(degToRad(164))]} scale={[0.5, 0.5, 0.5]} rotation={[0, degToRad(105), 0]} text={'Multimedia \nand \nContent'} />
            <DomainLabel position={[12*Math.cos(degToRad(200)), -5, 12*Math.sin(degToRad(200))]} scale={[0.5, 0.5, 0.5]} rotation={[0, degToRad(70), 0]} text={'Internet \nof \nThings'} />
            <DomainLabel position={[12*Math.cos(degToRad(236)), -5, 12*Math.sin(degToRad(236))]} scale={[0.5, 0.5, 0.5]} rotation={[0, degToRad(35), 0]} text={'Web3 \nDevelopment'} />
            <DomainLabel position={[12*Math.cos(degToRad(272)), -5, 12*Math.sin(degToRad(272))]} scale={[0.5, 0.5, 0.5]} rotation={[0, degToRad(0), 0]} text={'Web \nDevelopment'} />
            <DomainLabel position={[12*Math.cos(degToRad(308)), -5, 12*Math.sin(degToRad(308))]} scale={[0.5, 0.5, 0.5]} rotation={[0, degToRad(-35), 0]} text={'App \nDevelopment'} />
            <DomainLabel position={[12*Math.cos(degToRad(344)), -5, 12*Math.sin(degToRad(344))]} scale={[0.5, 0.5, 0.5]} rotation={[0, degToRad(-70), 0]} text={'AI - ML'} />
        
        </>
    )
}

