import React, { useState, useEffect, use } from "react";
import { useMLSCStore } from "../../store/MLSCStore";

function TextAnimation({word, className, addStyles}) {
  const [currentLetter, setCurrentLetter] = useState("@");
  const [currentString, setCurrentString] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const sideBarOpen = useMLSCStore((state) => state.sideBarOpen);
  const playBGM = useMLSCStore((state) => state.playBGM);
  // const [animate, setAnimate] = useState(false);

  const [index, setIndex] = useState(0);
  const [playSFX, setPlaySFX] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  
  useEffect(() => {
    
    // if(sideBarOpen){
    //   setAnimate(true);
    // }

    let intervalId;

    if (isHovered) {
      intervalId = setInterval(() => {
        if (currentString === word) {
          setPlaySFX(false);
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

  }, [currentLetter, isHovered]);

  return (
    <div
      onMouseEnter={() => {
        setIsHovered(true);
        setPlaySFX(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setPlaySFX(false);
      }}
      style={addStyles}
      className={className}
    >
      {isHovered 
        ? currentString === word
          ? word
          : currentString + "" + currentLetter
        : word}
        {(playBGM && playSFX) && <audio autoPlay src="/audio/sfx/couter-sfx.mp3" />}
    </div>
  );
}

export default TextAnimation;
