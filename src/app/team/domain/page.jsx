"use client";

import {
  Loader,
  OrbitControls,
  Stage,
  AccumulativeShadows,
  RandomizedLight,
  PerspectiveCamera,
  SpotLight,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import MemberScene from "./MemberScene.jsx";
import {NameYearDept, SocialIcons, Position, PrevNextButtons} from "./Components/UI.jsx";

import { Suspense, useRef, useState, useEffect } from "react";
import { useMLSCStore } from "../../store/MLSCStore";

import axios from "axios";

const domainMap = {
  "core": {name:"Core", text3d: "/models/domain-names/core3dcurvedtext.glb"},
  "event": {name:"Event Management", text3d: "/models/domain-names/event3dcurvedtext.glb"},
  "community": {name:"Community management", text3d: "/models/domain-names/community3dcurvedtext.glb"},
  "partnership": {name:"Partnership", text3d: "/models/domain-names/partnership3dcurvedtext.glb"},
  "multimedia": {name:"Multimedia", text3d: "/models/domain-names/multimedia3dcurvedtext.glb"},
  "iot": {name: "IoT", text3d: "/models/domain-names/iot3dcurvedtext.glb"},
  "web3": {name: "Web3", text3d: "/models/domain-names/web33dcurvedtext.glb"},
  "web": {name: "Web development", text3d: "/models/domain-names/web3dcurvedtext.glb"},
  "app": {name: "App dev", text3d: "/models/domain-names/app3dcurvedtext.glb"},
  "aiml": {name: "AI-ML", text3d: "/models/domain-names/ai-mldcurvedtext.glb"},

};



function Page() {

  const domain = useMLSCStore((s) => s.domain);

  const [memberData, setMemberData] = useState([]);
  const [index, setIndex] = useState(2);

  const camera = useRef();

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const handleNext = () => {
    if (index < memberData.length - 1) {
      setIndex(index + 1);
    }
  }

  console.log(`/api/team?domain=${domainMap[domain].name.split(" ").join("%20")}`)

  const getTeamData = async () => {
      try {
        const teamData = await axios.get(`/api/team?domain=${domainMap[domain].name.split(" ").join("%20")}`);
        setMemberData(teamData.data.data);
        
        // console.log(JSON.stringify(teamData.data.data[0]))
      } catch (err) {
        console.log("GET req error");
        // console.log(err);
        return err;
      }
  };

  useEffect(() => {
      getTeamData();
  }, []);

  console.log("MEMBERS:", memberData);

  return (
    <>
      <Canvas
        style={{ width: "100w", height: "100vh" }}
        // camera={{ position: [0, 1.8, 6], target: [0, 3, 0], near: 0.05, far: 50, fov: 50 }}
        shadows="soft"
      >
        {/* <OrbitControls /> */}
        <PerspectiveCamera
          ref={camera}
          makeDefault
          position={[0, 2, 12]}
          lookAt={[0, 0.5, 0]}
          near={0.05}
          far={50}
          fov={50}
        />
        <color attach="background" args={["#010114"]} />

        {/* <ambientLight intensity={1} /> */}
        <directionalLight
          position={[0, 2, -5]}
          color="#88b6f5"
          intensity={0.5}
          castShadow
        />
        {/* <axesHelper args={[5]} /> */}
        <pointLight distance={3} position={[0, 2.6, 1]} intensity={2} />
        <Suspense fallback={null}>
         <SpotLight position={[0, 3.5, 0]} penumbra={0.8} angle={Math.PI/8} radiusTop={3} radiusBottom={5} attenuation={5} distance={5} intensity={5} color='white' />
         <spotLight position={[0, 0, 2]} angle={Math.PI/2} intensity={2} />

          <ScrollControls pages={5} damping={2} >
            <MemberScene memberData={memberData} index={index} setIndex={setIndex} camera={camera} />
          </ScrollControls>
        {memberData.length > 0 && <Position data={memberData[index]} />}
        {memberData.length > 0 && <SocialIcons data={memberData[index]} />}
        {memberData.length > 0 && <NameYearDept data={memberData[index]} />}
        <PrevNextButtons handlePrev={handlePrev} handleNext={handleNext} />

        </Suspense>
      </Canvas>
      
      <Loader />
    </>
  );
}

export default Page;
