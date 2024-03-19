import { Html, Text } from "@react-three/drei";
import { degToRad, radToDeg } from "three/src/math/MathUtils";

import { TbBrandGithubFilled } from "react-icons/tb";

function EventCard({text, position, scale, rotation}){
    return (
        // <Text position={position} rotation={rotation} >
        //     {text}
        // </Text>
        <Html transform occlude position={position} scale={scale} rotation={rotation} >
            <div className="flex items-center text-[3px] w-full h-full justify-center bg-event-bg bg-cover bg-center ">
                <div>
                    
                </div>
            </div>
        </Html>
    )
}

export function EventCards({position, scale,}){
    return (
        <group position={position} >
            <EventCard position={[20*Math.cos(degToRad(30)),  -5, 20*Math.sin(degToRad(30))]}  scale={scale} rotation={[0, degToRad(60+180), 0]} />
            <EventCard position={[20*Math.cos(degToRad(60)),  -5, 20*Math.sin(degToRad(60))]}  scale={scale} rotation={[0, degToRad(30+180), 0]} />
            <EventCard position={[20*Math.cos(degToRad(120)), -5, 20*Math.sin(degToRad(120))]} scale={scale} rotation={[0, degToRad(-30+180), 0]} />
            <EventCard position={[20*Math.cos(degToRad(150)), -5, 20*Math.sin(degToRad(150))]} scale={scale} rotation={[0, degToRad(-60+180), 0]} />
            <EventCard position={[20*Math.cos(degToRad(210)), -5, 20*Math.sin(degToRad(210))]} scale={scale} rotation={[0, degToRad(60), 0]} />
            <EventCard position={[20*Math.cos(degToRad(240)), -5, 20*Math.sin(degToRad(240))]} scale={scale} rotation={[0, degToRad(30), 0]} />
            <EventCard position={[20*Math.cos(degToRad(300)), -5, 20*Math.sin(degToRad(300))]} scale={scale} rotation={[0, degToRad(-30), 0]} />
            <EventCard position={[20*Math.cos(degToRad(330)), -5, 20*Math.sin(degToRad(330))]} scale={scale} rotation={[0, degToRad(-60), 0]} />        
        </group>
    )
}


export function BlogCard({text, position, scale, rotation}){
    return (
        <Html transform occlude position={position} scale={scale} rotation={rotation} >
            <div className="flex items-center w-20 h-20 p-2 justify-center bg-center bg-cover bg-projects-blogs-bg opacity-95 brightness-125 rounded-[12px] ">
                {/* <div className="text-xs font-bold align-middle text-[#65a8d2] " >Loading</div> */}
                <div className="w-[97%] h-[97%] flex flex-col justify-start text-[#f0f0f0]">
                    <div className="w-full h-[15%] flex flex-row justify-between p-0">
                        {/* Serial Number */}
                        <span className="text-[6px]">01</span>
                        {/* Date */}
                        <div className="w-[50%] flex flex-col text-[3px]">
                            <span className="underline underline-offset-1">Author: </span>
                            <span>Soham Panchal</span>
                        </div>
                        
                    </div>
                    {/* Title */}
                    <span className="w-full text-[5px] h-[15px] text-left ">Configure VS code for Leetcode in Rust</span>

                    <div className="w-full h-[60%] flex flex-row">
                        <div className="w-1/2 h-full bg-slate-700"></div>
                        <div className="w-1/2 h-full flex flex-col justify-start gap-[4px] text-[3px] p-[2px]" >
                            <div className="flex flex-col">
                                <span className="underline">Domain:</span>
                                <span>Web development</span>
                            </div>


                            <div className="w-full h-[90%] bg-slate-500">
                                <span className="underline">Description:</span>
                                <span className="w-full h-full flex">
                                    <p className="h-5 w-full truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore maxime sunt, ipsum quam suscipit reprehenderit nisi ad ab, necessitatibus pariatur minus quos nihil, animi beatae. Commodi praesentium non quam. Blanditiis, debitis ex, eveniet eligendi ea sed tempore quam omnis ipsum atque, voluptatum temporibus commodi. Nobis culpa omnis perspiciatis error autem?</p>
                                </span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </Html>
    )
}

export function ProjectCard({text, position, scale, rotation}){
    return (
        <Html transform occlude position={position} scale={scale} rotation={rotation} >
            <div className="flex items-center w-20 h-20 p-2 justify-center bg-center bg-cover bg-projects-blogs-bg opacity-95 brightness-125 rounded-[12px] ">
                {/* <div className="text-xs font-bold align-middle text-[#65a8d2] " >Loading</div> */}
                <div className="w-[97%] h-[97%] flex flex-col justify-start text-[#f0f0f0]">
                    <div className="w-full h-[15%] flex flex-row justify-between p-0">
                        {/* Serial Number */}
                        <span className="text-[6px]">01</span>
                        {/* Date */}
                        <div className="w-[50%] flex flex-col text-[3px]">
                            <span className="underline underline-offset-1">Maintainer: </span>
                            <span>Soham Panchal</span>
                        </div>
                        
                    </div>
                    {/* Title */}
                    <span className="w-full text-[5px] h-[15px] text-left ">Configure VS code for Leetcode in Rust</span>

                    <div className="w-full h-[60%] flex flex-row">
                        <div className="w-1/2 h-full bg-slate-700"></div>
                        <div className="w-1/2 h-full flex flex-col justify-start gap-[4px] text-[3px] p-[2px]" >
                            <div className="flex flex-col">
                                <span className="underline">Domain:</span>
                                <span>Web development</span>
                            </div>


                            <div className="w-full flex items-center justify-center h-[90%] cursor-pointer">
                             <button className="p-[2px] bg-[#a0a0a0] rounded-[2px] hover:opacity-55">Go to project</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </Html>
    )
}
