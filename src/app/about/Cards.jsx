import React, { useEffect, useState } from "react";

import { Html, Text } from "@react-three/drei";
import { degToRad, radToDeg } from "three/src/math/MathUtils";

import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";
import axios from "axios";
import Link from "next/link";

function EventCard({ text, position, scale, rotation, eventData }) {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    console.log("Hovered: ", hovered);
  }, [hovered]);

  const date = eventData?.date !== "No Data" ?new Date(eventData?.date):"No Data";
  console.log("DATE: ", date)

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
      <div
        onPointerEnter={(e) => setHovered(true)}
        onPointerLeave={(e) => setHovered(false)}
        className="flex items-center text-[3px] w-6 h-4 justify-center bg-event-bg bg-cover bg-center "
      >
        {!hovered ? (
          <div className="w-[87%] h-[92%] mt-[1px] flex flex-col items-center justify-start text-[1px] text-[#e0e0e0] p-[1px]">
            <div className="flex flex-col justify-evenly w-full gap-0 h-[20%] ">
              <div>{eventData?.name}</div>
              <span className="text-[0.8px]">{eventData?.tagline}</span>
            </div>
            <div className="flex flex-row justify-center w-[80%] h-[60%] bg-slate-400">
              Image
            </div>

            <div className="flex flex-row justify-evenly w-full h-[25%] text-[0.8px] pt-[1px]">
              <div className="flex flex-col h-full w-auto justify-evenly">
                <div>Date:</div>
                <div className="text-[0.6px]">{date!=="No Data"?`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`:"No Data"}</div>
              </div>
              <div className="flex flex-col h-full w-auto justify-evenly">
                <div>Footfall:</div>
                <div className="text-[0.6px]">{eventData?.footfall}</div>
              </div>
              <div className="flex flex-col h-full w-auto justify-evenly">
                <div>Event Span:</div>
                <div className="text-[0.6px]">{eventData?.eventSpan}</div>
              </div>
              <div className="flex flex-col h-full w-auto justify-evenly text-blue-600">
                <a>LINK</a>
                <div className="text-[0.6px]"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[87%] h-[92%] mt-[1px] flex flex-col justify-start text-[1px] text-[#f0f0f0] p-[1px]">
            <div className="flex flex-col justify-evenly w-full gap-0 h-[20%] ">
              <div>{eventData?.title}</div>
              <span className="text-[0.8px]">{eventData?.tagline}</span>
            </div>
            <div className="flex flex-row w-full h-[80%] text-[0.6px] overflow-hidden">
              <div className="w-full h-auto"></div>
              {eventData?.description}
            </div>
          </div>
        )}
      </div>
    </Html>
  );
}

export function EventCards({ position, scale }) {
  const [eventData, setEvenData] = useState();

  const getEventData = async () => {
    try {
      const event_data = await axios.get("/api/event");
      setEvenData(event_data.data);
    } catch (e) {
      console.log("GET blog error", e);
    }
  };

  const nonLoadData = {
    id: "No Data",
    name: "No Data",
    tagline: "No Data",
    date: "No Data",
    description:
      "No Data",
    footfall: "No Data",
    eventSpan: "No Data",
    link: "",
    organisingPeople: "No Data",
  };

  useEffect(() => {
    getEventData();
  }, []);

  return (
    <group position={position}>
      <EventCard
        position={[
          20 * Math.cos(degToRad(30)),
          -4,
          20 * Math.sin(degToRad(30)),
        ]}
        eventData={eventData && eventData.length > 0 ? eventData[0] : nonLoadData}
        scale={scale}
        rotation={[0, degToRad(60 + 180), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(60)),
          -4,
          20 * Math.sin(degToRad(60)),
        ]}
        eventData={eventData && eventData.length > 1 ? eventData[1] : nonLoadData}
        scale={scale}
        rotation={[0, degToRad(30 + 180), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(120)),
          -4,
          20 * Math.sin(degToRad(120)),
        ]}
        eventData={eventData && eventData.length > 2 ? eventData[2] : nonLoadData}
        scale={scale}
        rotation={[0, degToRad(-30 + 180), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(150)),
          -4,
          20 * Math.sin(degToRad(150)),
        ]}
        eventData={eventData && eventData.length > 3 ? eventData[3] : nonLoadData}
        scale={scale}
        rotation={[0, degToRad(-60 + 180), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(210)),
          -4,
          20 * Math.sin(degToRad(210)),
        ]}
        eventData={eventData && eventData.length > 4 ? eventData[4] : nonLoadData}
        scale={scale}
        rotation={[0, degToRad(60), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(240)),
          -4,
          20 * Math.sin(degToRad(240)),
        ]}
        eventData={eventData && eventData.length > 5 ? eventData[5] : nonLoadData}
        scale={scale}
        rotation={[0, degToRad(30), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(300)),
          -4,
          20 * Math.sin(degToRad(300)),
        ]}
        eventData={eventData && eventData.length > 6 ? eventData[6] : nonLoadData}
        scale={scale}
        rotation={[0, degToRad(-30), 0]}
      />
      <EventCard
        position={[
          20 * Math.cos(degToRad(330)),
          -4,
          20 * Math.sin(degToRad(330)),
        ]}
        eventData={eventData && eventData.length > 7 ? eventData[7] : nonLoadData}
        scale={scale}
        rotation={[0, degToRad(-60), 0]}
      />
    </group>
  );
}

export function BlogCard({ text, position, scale, rotation }) {
  const [blogData, setBlogData] = useState();
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    if (index > 0) setIndex(index - 1);
  };
  const handleNextClick = () => {
    if (index < blogData.length - 1) setIndex(index + 1);
  };

  const getBlogData = async () => {
    try {
      const blog_data = await axios.get("/api/blog");
      setBlogData(blog_data.data);
    } catch (e) {
      console.log("GET blog error", e);
    }
  };

  let data = "Loading...";
  if (blogData) data = blogData[index];

  useEffect(() => {
    getBlogData();
  }, []);

  console.log("BLOGDATA", blogData);

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
          <div onClick={handlePrevClick} className="group">
            <div className="absolute -left-3 flex items-center justify-center text-[3px] p-[1px] rounded-[1px] text-center bg-[#28838f] text-[#f0f0f0] opacity-0 group-hover:opacity-100">
              Previous
            </div>
            <MdOutlineSkipPrevious className="text-[#09d9f3] hover:brightness-200 hover:text-[#f0f0f0]" />
          </div>
          <div onClick={handleNextClick} className="group">
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
            <span className="text-[6px]">{index + 1}</span>
            {/* Date */}
            <div className="w-[50%] flex flex-col text-[3px]">
              <span className="underline underline-offset-1">Author: </span>
              <span>Soham Panchal</span>
            </div>
          </div>
          {/* Title */}
          <span className="w-full text-[3.5px] text-balance h-[15px] text-left ">
            {data?.title}
          </span>

          <div className="w-full h-[60%] flex flex-row">
            <div className="w-1/2 h-full bg-slate-700">
              <img
                src={data?.imageUrl}
                width={40}
                className="h-full w-full opacity-60 text-[2px]"
                alt="poster"
              />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-start gap-[4px] text-[3px] p-[2px]">
              <div className="flex flex-col">
                <span className="underline">Domain:</span>
                <span>{data?.domain}</span>
              </div>

              <div className="w-full h-[90%]">
                <span className="underline">Description:</span>
                <span className="w-full h-full flex">
                  <p className="h-5 w-full truncate">{data?.description}</p>
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
  const [projectData, setProjectData] = useState();
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    if (index > 0) setIndex(index - 1);
  };
  const handleNextClick = () => {
    if (index < projectData.length - 1) setIndex(index + 1);
  };

  const getProjectData = async () => {
    try {
      const project_data = await axios.get("/api/project");
      setProjectData(project_data.data);
    } catch (e) {
      console.log("GET blog error", e);
    }
  };

  let data = "Loading...";
  if (projectData) data = projectData[index];

  useEffect(() => {
    getProjectData();
  }, []);

  console.log("BLOGDATA", data);

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
          <div onClick={handlePrevClick} className="group">
            <div className="absolute -left-3 flex items-center justify-center text-[3px] p-[1px] rounded-[1px] text-center bg-[#28838f] text-[#f0f0f0] opacity-0 group-hover:opacity-100 ">
              Previous
            </div>
            <MdOutlineSkipPrevious className="text-[#09d9f3] hover:brightness-200 hover:text-[#f0f0f0]" />
          </div>
          <div onClick={handleNextClick} className="group">
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
            <span className="text-[6px]">{index + 1}</span>
            {/* Date */}
            <div className="w-[50%] flex flex-col text-[3px]">
              <span className="underline underline-offset-1">Maintainer: </span>
              <span>Soham Panchal</span>
            </div>
          </div>
          {/* Title */}
          <span className="w-full text-[5px] h-[15px] text-left ">
            {data?.title}
          </span>

          <div className="w-full h-[70%] flex flex-row">
            <div className="w-full h-full flex flex-col justify-start gap-[4px] text-[3px] p-[2px]">
              <div className="flex flex-col">
                <span className="underline">Description:</span>
                <span className="text-ellipsis">{data?.description}</span>{" "}
                {/* max words 30 */}
              </div>

              <div className="w-full flex items-center justify-center h-[90%] cursor-pointer">
                {data?.gitUrl !== undefined && (
                  <Link
                    href={data?.gitUrl}
                    className="p-[2px] bg-[#a0a0a0] rounded-[2px] hover:opacity-55"
                  >
                    Go to project
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}

export function Cardlabel({ label, position, scale, rotation }) {
  return (
    <Html
      transform
      occlude
      position={position}
      scale={scale}
      rotation={rotation}
    >
      <div className="text-[#f0f0f0] bg-red-500 border-1 border-red-950 opacity-40 w-auto p-1 rounded-md h-auto text-xl text-center">
        {label}
      </div>
    </Html>
  );
}
