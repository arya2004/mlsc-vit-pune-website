import React, { useEffect, useState } from "react";

import { Html, Text } from "@react-three/drei";
import { degToRad, radToDeg } from "three/src/math/MathUtils";

import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";

function EventCard({ text, position, scale, rotation }) {

    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        console.log("Hovered: ", hovered);
    }, [hovered]);

  return (
    // <Text position={position} rotation={rotation} >
    //     {text}
    // </Text>
    <Html
      transform
      occlude
      position={position}
      scale={scale}
      rotation={rotation}
      
    >
      <div onPointerEnter={(e) => setHovered(true)} onPointerLeave={(e) => setHovered(false)} className="flex items-center text-[3px] w-6 h-4 justify-center bg-event-bg bg-cover bg-center ">
        {!hovered?
        (<div className="w-[87%] h-[92%] mt-[1px] flex flex-col justify-start text-[1px] text-[#e0e0e0] p-[1px]">
          <div className="flex flex-col justify-evenly w-full gap-0 h-[20%] ">
            <div>Hackspiration</div>
            <span className="text-[0.8px]">tagline</span>
          </div>
          <div className="flex flex-row w-full h-[60%] bg-slate-400">Image</div>

          <div className="flex flex-row justify-evenly w-full h-[25%] text-[0.8px] pt-[1px]">
            <div className="flex flex-col h-full w-auto justify-evenly">
              <div>Date:</div>
              <div className="text-[0.6px]">15th to 20th April, 2024</div>
            </div>
            <div className="flex flex-col h-full w-auto justify-evenly">
              <div>Footfall:</div>
              <div className="text-[0.6px]">1000</div>
            </div>
            <div className="flex flex-col h-full w-auto justify-evenly">
              <div>Event Span:</div>
              <div className="text-[0.6px]">5 days</div>
            </div>
            <div className="flex flex-col h-full w-auto justify-evenly text-blue-600">
              <a>LINK</a>
              <div className="text-[0.6px]"></div>
            </div>
          </div>
        </div>):
            (
                <div className="w-[87%] h-[92%] mt-[1px] flex flex-col justify-start text-[1px] text-[#f0f0f0] p-[1px]">
                <div className="flex flex-col justify-evenly w-full gap-0 h-[20%] ">
                  <div>Hackspiration</div>
                  <span className="text-[0.8px]">tagline</span>
                </div>
                <div className="flex flex-row w-full h-[80%] text-[0.6px] overflow-hidden">
                    <div className="w-full h-auto"></div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo odit, voluptatem debitis eos officia quo veritatis voluptatum amet alias esse neque unde dicta iste minus error repudiandae deserunt non dolore soluta in labore itaque numquam nobis aliquid! Consequuntur velit commodi ducimus labore, veritatis molestiae nemo nobis obcaecati saepe esse exercitationem odit eaque quibusdam est officiis, a doloribus omnis at. Eaque beatae dolorem mollitia consectetur exercitationem dicta harum, amet minima iusto non voluptatem quasi sit temporibus facilis dolor totam quae aliquam aliquid soluta voluptates inventore. Iure, quas nisi, eos nihil quod magnam rerum dicta doloremque possimus magni vel. Labore, eaque dolorum.
                </div>
              </div>
            )
        
        }
      </div>
    </Html>
  );
}

export function EventCards({ position, scale }) {
  return (
    <group position={position}>
      <EventCard
        position={[
          20 * Math.cos(degToRad(30)),
          -4,
          20 * Math.sin(degToRad(30)),
        ]}
        scale={scale}
        rotation={[0, degToRad(60 + 180), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(60)),
          -4,
          20 * Math.sin(degToRad(60)),
        ]}
        scale={scale}
        rotation={[0, degToRad(30 + 180), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(120)),
          -4,
          20 * Math.sin(degToRad(120)),
        ]}
        scale={scale}
        rotation={[0, degToRad(-30 + 180), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(150)),
          -4,
          20 * Math.sin(degToRad(150)),
        ]}
        scale={scale}
        rotation={[0, degToRad(-60 + 180), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(210)),
          -4,
          20 * Math.sin(degToRad(210)),
        ]}
        scale={scale}
        rotation={[0, degToRad(60), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(240)),
          -4,
          20 * Math.sin(degToRad(240)),
        ]}
        scale={scale}
        rotation={[0, degToRad(30), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(300)),
          -4,
          20 * Math.sin(degToRad(300)),
        ]}
        scale={scale}
        rotation={[0, degToRad(-30), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(330)),
          -4,
          20 * Math.sin(degToRad(330)),
        ]}
        scale={scale}
        rotation={[0, degToRad(-60), 0]}
      />
    </group>
  );
}

export function BlogCard({ text, position, scale, rotation }) {
  return (
    <Html
      transform
      occlude
      position={position}
      scale={scale}
      rotation={rotation}
    >
      <div className="flex items-center w-20 h-20 p-2 justify-center bg-center bg-cover bg-projects-blogs-bg opacity-95 brightness-125 rounded-[12px] ">
        {/* Added previous and next buttons */}
        <div className="absolute h-2 items-center top-1/2 -translate-y-1/2 w-full flex flex-row justify-between z-10 text-[5px]">
          <div className="group">
            <div className="absolute -left-3 flex items-center justify-center text-[3px] p-[1px] rounded-[1px] text-center bg-[#28838f] text-[#f0f0f0] opacity-0 group-hover:opacity-100">
              Previous
            </div>
            <MdOutlineSkipPrevious className="text-[#09d9f3] hover:brightness-200 hover:text-[#f0f0f0]" />
          </div>
          <div className="group">
            <div className="absolute -right-2 flex items-center justify-center text-[3px] p-[1px] rounded-[1px] text-center bg-[#28838f] text-[#f0f0f0] opacity-0 group-hover:opacity-100">
              Next
            </div>
            <MdOutlineSkipNext className="text-[#09d8f3d5] hover:brightness-200 hover:text-[#f0f0f0]" />
          </div>
        </div>
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
          <span className="w-full text-[5px] h-[15px] text-left ">
            Configure VS code for Leetcode in Rust
          </span>

          <div className="w-full h-[60%] flex flex-row">
            <div className="w-1/2 h-full bg-slate-700"></div>
            <div className="w-1/2 h-full flex flex-col justify-start gap-[4px] text-[3px] p-[2px]">
              <div className="flex flex-col">
                <span className="underline">Domain:</span>
                <span>Web development</span>
              </div>

              <div className="w-full h-[90%]">
                <span className="underline">Description:</span>
                <span className="w-full h-full flex">
                  <p className="h-5 w-full truncate">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Labore maxime sunt, ipsum quam suscipit reprehenderit nisi
                    ad ab, necessitatibus pariatur minus quos nihil, animi
                    beatae. Commodi praesentium non quam. Blanditiis, debitis
                    ex, eveniet eligendi ea sed tempore quam omnis ipsum atque,
                    voluptatum temporibus commodi. Nobis culpa omnis
                    perspiciatis error autem?
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}

export function ProjectCard({ text, position, scale, rotation }) {
  return (
    <Html
      transform
      occlude
      position={position}
      scale={scale}
      rotation={rotation}
    >
      <div className="flex items-center w-20 h-20 p-2 justify-center bg-center bg-cover bg-projects-blogs-bg opacity-95 brightness-125 rounded-[12px] ">
        {/* Added previous and next buttons */}
        <div className="absolute h-2 items-center top-1/2 -translate-y-1/2 w-full flex flex-row justify-between z-10 text-[5px] cursor-pointer">
          <div className="group">
            <div className="absolute -left-3 flex items-center justify-center text-[3px] p-[1px] rounded-[1px] text-center bg-[#28838f] text-[#f0f0f0] opacity-0 group-hover:opacity-100 ">
              Previous
            </div>
            <MdOutlineSkipPrevious className="text-[#09d9f3] hover:brightness-200 hover:text-[#f0f0f0]" />
          </div>
          <div className="group">
            <div className="absolute -right-2 flex items-center justify-center text-[3px] p-[1px] rounded-[1px] text-center bg-[#28838f] text-[#f0f0f0] opacity-0 group-hover:opacity-100 ">
              Next
            </div>
            <MdOutlineSkipNext className="text-[#09d8f3d5] hover:brightness-200 hover:text-[#f0f0f0]" />
          </div>
        </div>
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
          <span className="w-full text-[5px] h-[15px] text-left ">
            Configure VS code for Leetcode in Rust
          </span>

          <div className="w-full h-[60%] flex flex-row">
            <div className="w-1/2 h-full bg-slate-700"></div>
            <div className="w-1/2 h-full flex flex-col justify-start gap-[4px] text-[3px] p-[2px]">
              <div className="flex flex-col">
                <span className="underline">Domain:</span>
                <span>Web development</span>
              </div>

              <div className="w-full flex items-center justify-center h-[90%] cursor-pointer">
                <button className="p-[2px] bg-[#a0a0a0] rounded-[2px] hover:opacity-55">
                  Go to project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}
