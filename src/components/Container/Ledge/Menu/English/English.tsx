import * as React from "react";
import "./English.less";
import { useState } from "react";

export const English: React.FC = () => {
  const [isEnglish, setEnglish] = useState(false);
  const [isChange, setChange] = useState(false);
  const [isAbout, setAbout] = useState(false);
  const [isProject, setProject] = useState(false);
  const [isProjects, setProjects] = useState(false);

  const toggleChange = () => {
    setChange(!isChange);
    const English = document.getElementById("English")!;
    if (English.classList.contains("English--dark")) {
      English.classList.remove("English--dark");
    } else {
      English.classList.add("English--dark");
    }
    setEnglish(!isEnglish);
    const aboutme = document.getElementById("Aboutme")!;
    if (aboutme.classList.contains("Aboutme")) {
      aboutme.classList.remove("Aboutme");
    } else {
      aboutme.classList.add("Aboutme");
    }
    setAbout(!isAbout);
    const aboutme1 = document.getElementById("Aboutme")!;
    if (aboutme1.classList.contains("Aboutme1")) {
      aboutme1.classList.remove("Aboutme1");
    } else {
      aboutme1.classList.add("Aboutme1");
    }
    setProject(!isProject);
    const project = document.getElementById("Projects")!;
    if (project.classList.contains("Project")) {
      project.classList.remove("Project");
    } else {
      project.classList.add("Project");
    }
    setProjects(!isProjects);
    const projects = document.getElementById("Projects")!;
    if (projects.classList.contains("Projects")) {
      projects.classList.remove("Projects");
    } else {
      projects.classList.add("Projects");
    }
  };
  return (
    <div id={"English"} className={"English"} onClick={toggleChange}></div>
  );
};
