"use client";

import { useState } from "react";

export default function Domainoutput({ setSeeDomains, setWhichDomain }) {
  const [domains, setDomains] = useState([
    "Core",
    "AI-ML",
    "App dev",
    "Community management",
    "Event Management",
    "IoT",
    "Multimedia",
    "Partnership",
    "Web development",
    "Web3",
  ]);

  const handleClick = (value) => {
    setWhichDomain(value);
    setSeeDomains(false);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-[85%]">
      <span className="flex flex-row justify-center pt-4 pb-2 text-[#6A6A6A] border-b-[1px] border-[#6A6A6A]">
        Domains
      </span>
      <div className="w-full h-full overflow-y-auto">
        {domains.map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(value)}
              className="flex flex-row items-center p-2 text-lg text-[#6A6A6A] w-full h-16 border-b-[1px] border-[#6A6A6A] hover:bg-[#282828] cursor-pointer ease-in-out duration-100"
            >
              {/* {console.log(value)} */}
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
