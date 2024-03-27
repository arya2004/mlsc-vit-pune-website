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
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import MemberScene from "./MemberScene.jsx";
import {
  NameYearDept,
  SocialIcons,
  Position,
  PrevNextButtons,
} from "./Components/UI.jsx";
import CustomLoader from "../../components/CustomLoader";
import ComponentLoader from "../../components/ComponentLoader";
import Sidebar from "../../home/overlay-ui/Sidebar";
import PlaySoundButton from "../../components-3d/PlaySoundButton";

import { Suspense, useRef, useState, useEffect } from "react";
import { useMLSCStore } from "../../store/MLSCStore";

import axios from "axios";

import * as THREE from "three";
import { Playball } from "next/font/google/index.js";
import { ScrollDownRotate } from "../../components/UserDirections.jsx";

const domainMap = {
  core: { name: "Core", text3d: "/models/domain-names/core3dcurvedtext.glb" },
  event: {
    name: "Event Management",
    text3d: "/models/domain-names/event3dcurvedtext.glb",
  },
  community: {
    name: "Community management",
    text3d: "/models/domain-names/community3dcurvedtext.glb",
  },
  partnership: {
    name: "Partnership",
    text3d: "/models/domain-names/partnership3dcurvedtext.glb",
  },
  multimedia: {
    name: "Multimedia",
    text3d: "/models/domain-names/multimedia3dcurvedtext.glb",
  },
  iot: { name: "IoT", text3d: "/models/domain-names/iot3dcurvedtext.glb" },
  web3: { name: "Web3", text3d: "/models/domain-names/web33dcurvedtext.glb" },
  web: {
    name: "Web development",
    text3d: "/models/domain-names/web3dcurvedtext.glb",
  },
  app: { name: "App dev", text3d: "/models/domain-names/app3dcurvedtext.glb" },
  aiml: { name: "AI-ML", text3d: "/models/domain-names/ai-mldcurvedtext.glb" },
};

function Page() {
  const domain = useMLSCStore((s) => s.domain);
  const sidebarOpen = useMLSCStore((s) => s.sidebarOpen);

  const [memberData, setMemberData] = useState([]);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [loading, setLoading] = useState(true);

  const camera = useRef();

  const {progress} = useProgress();

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < memberData.length - 1) {
      setIndex(index + 1);
    }
  };

  const handleAvatarClick = () => {
    setZoom(!zoom);
  };

  console.log(
    `/api/team?domain=${domainMap[domain].name.split(" ").join("%20")}`
  );

  const getTeamData = async () => {
    try {
      console.log("first");
      const teamData = await axios.get(
        `/api/team?domain=${domainMap[domain].name.split(" ").join("%20")}`
      );
      console.log("TEAM DATA:", teamData);
      if (!teamData.data.cached) setMemberData(teamData.data.data);
      else setMemberData(teamData.data.cached);

      console.log(teamData.data.data[0]);
    } catch (err) {
      console.log("GET req error");
      // console.log(err);
      return err;
    } finally {
      console.log("done");
      setLoading(false);
    }
  };

  useEffect(() => {
    getTeamData();
  }, []);

  if(domain !== 'core'){
    memberData?.sort((a, b) => {
      if (a.position === 'Domain lead') {
        return -1; // 'domain lead' comes before 'coordinator'
      }
      if (b.position === 'Domain lead') {
        return 1; // 'domain lead' comes before 'coordinator'
      }
      return 0;
    })
  }

  console.log("MEMBERS:", memberData);
 
  return (
    <div className="w-screen h-screen bg-transparent overflow-hidden">
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
          near={zoom ? 0.001 : 0.05}
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
        <Suspense fallback={<ComponentLoader />}>
          <SpotLight
            position={[0, 3.5, 0]}
            penumbra={0.8}
            angle={Math.PI / 8}
            radiusTop={3}
            radiusBottom={5}
            attenuation={5}
            distance={5}
            intensity={5}
            color="white"
          />
          <spotLight position={[0, 0, 2]} angle={Math.PI / 2} intensity={2} />

          <ScrollControls pages={5} damping={2}>
            <MemberScene
              memberData={memberData}
              index={index}
              setIndex={setIndex}
              zoom={zoom}
              camera={camera}
              loading={loading}
            />
          </ScrollControls>
          
           {!loading && progress === 100 && !sidebarOpen && 
           <Position
              onClick={handleAvatarClick}
              data={memberData[index]}
              scale={zoom ? 0.2 : 0.35}
              position={zoom ? [3.4, 2, -1] : [5.8, 1.4, -1]}
            />}
        
          {!zoom && progress === 100 && !loading && !sidebarOpen &&  (
            <SocialIcons data={memberData[index]} />
          )}
          {!zoom && !loading && progress === 100 && !sidebarOpen &&  (
            <NameYearDept data={memberData[index]} />
          )}
          {progress===100 && !sidebarOpen &&  <PrevNextButtons handlePrev={handlePrev} handleNext={handleNext} />}
        </Suspense>
      </Canvas>
      <PlaySoundButton />
      <ScrollDownRotate />
      <CustomLoader urlIndex={1} />
      <Sidebar />
    </div>
  );
}

export default Page;
