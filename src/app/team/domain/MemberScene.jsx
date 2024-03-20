import { Html, useScroll } from "@react-three/drei";
import { useRef, useState, useEffect, Suspense } from "react";

import { Avatar } from "./Components/Avatar";
import { TeamBGScene } from "./Components/TeamBGScene";
import { useFrame } from "@react-three/fiber";
import { Text3DModel } from "./Text3DModel";
import { degToRad } from "three/src/math/MathUtils";

import { useMLSCStore } from "../../store/MLSCStore";

const domainTo3DText = {
    "event" : "/models/domain-names/event3dcurvedtext.glb",
    "community" : "/models/domain-names/community3dcurvedtext.glb",
    "partnership" : "/models/domain-names/partnership3dcurvedtext.glb",
    "multimedia" : "/models/domain-names/multimedia3dcurvedtext.glb",
    "iot" : "/models/domain-names/iot3dcurvedtext.glb",
    "web3" : "/models/domain-names/web33dcurvedtext.glb",
    "web" : "/models/domain-names/web3dcurvedtext.glb",
    "app" : "/models/domain-names/app3dcurvedtext.glb",
    "aiml" : "/models/domain-names/ai-mldcurvedtext.glb",
}


export default function MemberScene({memberData, index, setIndex, camera}){
    
    const domain = useMLSCStore((s) => s.domain);

    const noOfMembers = memberData.length;

    const scroll = useScroll();
    const memberScene = useRef();


    scroll.damping = noOfMembers;

    scroll.pages = noOfMembers;
    console.log("SCROLL: ",scroll.pages);

    const handleAvatarClick = () => {
        camera.position.set(0, 0, 5);
    }

    useEffect(() => {
        setIndex(Math.floor(scroll.offset * noOfMembers));
        // console.log("SCROLL INDEX", scroll.offset, Math.floor(scroll.offset * noOfMembers));
    }, [Math.floor(scroll.offset * noOfMembers)]);


    useFrame((state, delta) => {
         // Rotate contents
        state.events.update(); // Raycasts every frame rather than on pointer-move
        memberScene.current.rotation.y = -scroll.offset * (Math.PI * 2);
        console.log("SCROLL INDEX:", Math.floor(scroll.offset+0.25 * noOfMembers))

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
           <Suspense fallback='spinner' >
            {memberData.length !== 0 && <Avatar avatarURL={memberData[index]?.modelLink} handleAvatarClick={handleAvatarClick} scale={1.7}  />}
           </Suspense>
           {/* <Text3DModel position={[0, -0.05, 2.7]} rotation={[0, degToRad(40), 0]} scale={0.5} modelURL={domainTo3DText[domain]} /> */}
           <TeamBGScene rotation={[Math.PI/2, 0, 0]} scale={[0.5, 0.5, 0.6]}  />
        </group>
    )
}