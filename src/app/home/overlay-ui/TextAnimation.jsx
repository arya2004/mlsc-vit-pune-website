import React, { useState, useEffect } from "react";

function TextAnimation({word, className}) {
  const [currentLetter, setCurrentLetter] = useState("@");
  const [currentString, setCurrentString] = useState("");

  const [isHoveredHome, setIsHoveredHome] = useState(false);
  // const [isHoveredEvent, setIsHoveredEvent] = useState(false);
  // const [isHoveredProject, setIsHoveredProject] = useState(false);
  // const [isHoveredTeam, setIsHoveredTeam] = useState(false);
  // const [isHoveredBlog, setIsHoveredBlog] = useState(false);

  const [index, setIndex] = useState(0);
//   const [word, setWord] = useState("HOME");

  const home = "HOME";

  useEffect(() => {
    // const handleTextAnim = (word) => {
    let intervalId;

    if (isHoveredHome) {
      // setCurrentString(currentLetter);
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
      }, 8); // Adjust the interval as needed
    } else {
      setCurrentLetter("@");
      setIndex(0);
      setCurrentString("");
    }
    // console.log(`Current String: ${currentString+""+currentLetter} index: ${index}`);
    // console.log(currentLetter);
    return () => clearInterval(intervalId);
    // }

    // handleTextAnim(word);
  }, [currentLetter, isHoveredHome]);

  return (
    <div
      onMouseEnter={() => {
        setIsHoveredHome(true);
      }}
      onMouseLeave={() => {
        setIsHoveredHome(false);
      }}
  
      className={className}
    >
      {isHoveredHome
        ? currentString === word
          ? word
          : currentString + "" + currentLetter
        : word}
    </div>
  );
}

export default TextAnimation;
