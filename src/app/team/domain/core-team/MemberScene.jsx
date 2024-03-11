import { useScroll } from "@react-three/drei";
import { useRef } from "react";

import { Avatar } from "./Avatar";
import { CoreTeamScene } from "./CoreTeamScene";
import { useFrame } from "@react-three/fiber";


export default function MemberScene(){

    const noOfMembers = 5;

    const scroll = useScroll();
    const memberScene = useRef();

    scroll.damping = noOfMembers;

    scroll.pages = noOfMembers;
    console.log("SCROLL: ",scroll.pages);

    useFrame((state, delta) => {
         // Rotate contents
        state.events.update(); // Raycasts every frame rather than on pointer-move

        // console.log("ROTATION: ", -memberScene.current.rotation.y);
        // console.log("DAMPING:", scroll.damping);
        console.log("BOOL", (-memberScene.current.rotation.y) % (Math.PI * 2) === 0);

        if(-memberScene.current.rotation.y % (Math.PI * 2) === 0){
            memberScene.current.rotation.y = -scroll.offset * (Math.PI * 2);
        } else {
            memberScene.current.rotation.y = -scroll.offset * noOfMembers * (Math.PI * 2);
        }
        // easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9], 0.3, delta);
        // state.camera.lookAt(0, 0, 0);
    });



    return (
        <group ref={memberScene}>
           <Avatar scale={1.7} />
           <CoreTeamScene rotation={[Math.PI/2, 0, 0]} scale={[0.5, 0.5, 0.6]} />
        </group>
    )
}