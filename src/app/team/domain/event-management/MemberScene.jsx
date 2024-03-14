import { Html, useScroll } from "@react-three/drei";
import { useRef, useState } from "react";

import { Avatar } from "./Avatar";
import { CoreTeamScene } from "./CoreTeamScene";
import { useFrame } from "@react-three/fiber";
import { degToRad, radToDeg } from "three/src/math/MathUtils";


export default function MemberScene({ref}){

    const noOfMembers = 5;

    // const [next, setNext] = useState(true);
    // const [prev, setPrev] = useState(false);

    // const targetRot = Math.PI*2;

    const scroll = useScroll();
    const memberScene = useRef();

    // const handleClickPrev = () => {
    //     setPrev(true);
    // };
    
    // const handleClickNext = () => {
    //     setNext(true);
    // };

    // useFrame((state, delta) => {
        
    //     if(next){
    //         memberScene.current.rotation.y += 0.5;
    //         if(memberScene.current.rotation.y >= targetRot-0.){
    //             setNext(false);
    //         }
    //     }

    //     if(prev){
    //         memberScene.current.rotation.y -= 5;
    //         if(memberScene.current.rotation.y <= -targetRot){
    //             setPrev(false);
    //         }
    //     }
    // });

    scroll.damping = noOfMembers;

    scroll.pages = noOfMembers;
    console.log("SCROLL: ",scroll.pages);



    useFrame((state, delta) => {
         // Rotate contents
        state.events.update(); // Raycasts every frame rather than on pointer-move
        memberScene.current.rotation.y = -scroll.offset * noOfMembers * (Math.PI * 2);

        // console.log("ROTATION: ", radToDeg(-memberScene.current.rotation.y % (Math.PI * 2)));
        // console.log("OFFSET:", Math.floor(scroll.offset*100))
        // console.log("DVIDEND:", Math.floor(Math.floor(scroll.offset*100) % Math.floor((1/5)*100)));
        // console.log("DAMPING:", scroll.damping);
        // console.log("BOOL:", (Math.floor(Math.floor(scroll.offset*100) % (1/5)*100) <= 18 && Math.floor(Math.floor(scroll.offset*100) % (1/5)*100) >= 1));

        // if(-memberScene.current.rotation.y % (Math.PI * 2) > degToRad(340) || -memberScene.current.rotation.y % (Math.PI * 2) < degToRad(20)){
        // //    scroll.damping = 10;
        //     memberScene.current.rotation.y = -scroll.offset * noOfMembers * (Math.PI * 2)/5;
        // } else {
        //     // scroll.damping = 5;
        //     memberScene.current.rotation.y = -scroll.offset * noOfMembers * (Math.PI * 2)*5;
        // }

        if(Math.floor(Math.floor(scroll.offset*100) % (1/5)*100) <= 18 && Math.floor(Math.floor(scroll.offset*100) % (1/5)*100) >= 1){
            scroll.damping = 1;
            // memberScene.current.rotation.y = -scroll.offset * noOfMembers * (Math.PI * 2)/5;
        } else {
            scroll.damping = 10;
            // memberScene.current.rotation.y = -scroll.offset * noOfMembers * (Math.PI * 2)*5;
        }

        // easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9], 0.3, delta);
        // state.camera.lookAt(0, 0, 0);
    });



    return (
        <group ref={memberScene}>
           <Avatar scale={1.7} />
           <CoreTeamScene rotation={[Math.PI/2, 0, 0]} scale={[0.5, 0.5, 0.6]} />
           {/* <Html center >
           <div className="absolute top-0 w-screen h-screen flex flex-row items-end bg-transparent">
             <button onClick={handleClickPrev} className="bg-[#0d3853] text-[#65a8d2] p-2 rounded-[8px] mr-5 border-1 border-[#84c0e5] cursor-pointer">prev</button>
             <button onClick={handleClickNext} className="bg-[#0d3853] text-[#65a8d2] p-2 rounded-[8px] ml-5 border-1 border-[#84c0e5] cursor-pointer">next</button>
           </div>
           </Html> */}
        </group>
    )
}