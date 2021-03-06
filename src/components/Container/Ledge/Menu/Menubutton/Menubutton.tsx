import * as React from "react";
import "./Menubutton.less";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

export const Menubutton: React.FC = () => {
  const [isEnglish, setEnglish] = useState(false);
  const [isChange, setChange] = useState(false);
  const [isHeight, setHeight] = useState(false);
  const [isCross, setCross] = useState(false);

  const toggleChange = () => {
    setChange(!isChange);
    const English = document.getElementById("Projects")!;
    if (English.classList.contains("Projects--menu")) {
      English.classList.remove("Projects--menu");
    } else {
      English.classList.add("Projects--menu");
    }
    setEnglish(!isEnglish);
    const aboutme = document.getElementById("Aboutme")!;
    if (aboutme.classList.contains("Aboutme--menu")) {
      aboutme.classList.remove("Aboutme--menu");
    } else {
      aboutme.classList.add("Aboutme--menu");
    }
    setHeight(!isHeight);
    const height = document.getElementById("Ledge")!;
    if (height.classList.contains("Ledge--menu")) {
      height.classList.remove("Ledge--menu");
    } else {
      height.classList.add("Ledge--menu");
    }
    setCross(!isCross);
    const cross = document.getElementById("Menubutton")!;
    if (cross.classList.contains("Menubutton--menu")) {
      cross.classList.remove("Menubutton--menu");
    } else {
      cross.classList.add("Menubutton--menu");
    }
  };
  return (
    <BrowserRouter>
      <div id="Menubutton" className="Menubutton" onClick={toggleChange}></div>
    </BrowserRouter>
  );
};
