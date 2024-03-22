import React, { useState } from "react";
import cn from "../../utils/cn";
import "./styles.css";

import TextAnimation from "./TextAnimation";

function Option({ text, number, addStyles, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className="flex flex-row justify-start h-auto w-[16rem]"
    >
      <TextAnimation
        hover={hover}
        word={text}
        addStyles={addStyles}
        className={cn(
          hover ? "bg-[#0078D4] text-black clip-corner-option" : "bg-transparent text-[#E6E6E6]",
          "relative flex items-center justify-start h-10 p-2 px-4 rounded-[2px] rounded-br-[19px] text-2xl text-[#E6E6E6] clip-corner-option font-Wallpoet ease-in-out duration-300"
        )}
      />
      <div
        className={cn(
          hover ? "text-opacity-100" : "opacity-0",
          "h-full w-1/4 text-[#0078D4] text-xs p-2 pt-0 uppercase ease-in-out duration-300"
        )}
      >
        {number}
      </div>
    </div>
  );
}

export default Option;
