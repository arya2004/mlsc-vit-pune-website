import React, { useState, useEffect } from "react";
import { useMLSCStore } from "../../store/MLSCStore";

function TextAnimation({word, className, addStyles}) {
  const [currentLetter, setCurrentLetter] = useState("@");
  const [currentString, setCurrentString] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const sideBarOpen = useMLSCStore((state) => state.sideBarOpen);
  // const [animate, setAnimate] = useState(false);

  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    
    // if(sideBarOpen){
    //   setAnimate(true);
    // }
    let intervalId;

    if (isHovered) {
 
      intervalId = setInterval(() => {
        if (currentString === word) {
          setCurrentLetter("");
          clearInterval(intervalId);
        } else if (currentLetter === word[index]) {
          setCurrentString(currentString + "" + word[index]);
          if(currentLetter !== '@')
            setCurrentLetter("@");
          setIndex(index + 1);
        } else {
          setCurrentLetter((prevLetter) =>
            String.fromCharCode(prevLetter.charCodeAt(0) + 1)
          );
        }
      }, 1.2); // Adjust the interval as needed

      // setAnimate(false);
    } else {
      setCurrentLetter("@");
      setIndex(0);
      setCurrentString("");
    }
  
    return () => clearInterval(intervalId);

  }, [currentLetter, isHovered, sideBarOpen]);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      style={addStyles}
      className={className}
    >
      {isHovered 
        ? currentString === word
          ? word
          : currentString + "" + currentLetter
        : word}
    </div>
  );
}

export default TextAnimation;
