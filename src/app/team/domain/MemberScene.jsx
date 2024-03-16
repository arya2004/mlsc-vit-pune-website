import { Html, useScroll } from "@react-three/drei";
import { useRef, useState } from "react";

import { Avatar } from "./Components/Avatar";
import { TeamBGScene } from "./Components/TeamBGScene";
import { useFrame } from "@react-three/fiber";
import { Text3DModel } from "./Text3DModel";
import { degToRad } from "three/src/math/MathUtils";


export default function MemberScene({}){

    const noOfMembers = 5;

    const scroll = useScroll();
    const memberScene = useRef();


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
           <Text3DModel position={[0, 0, 2.7]} rotation={[0, degToRad(35), 0]} scale={0.5} />
           <TeamBGScene rotation={[Math.PI/2, 0, 0]} scale={[0.5, 0.5, 0.6]} />
        </group>
    )
}