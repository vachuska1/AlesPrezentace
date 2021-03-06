import * as React from "react";
import "./Projects.less";
import { BrowserRouter as Link } from "react-router-dom";
import { useState } from "react";
import { Content } from "../../../Content/Content";

export const Projects: React.FC = () => {
  const [isProject, setProject] = useState(false);
  const changeSport = (event) => {
    document.body.className = "";
    document.body.classList.add(event.currentTarget.id);
  };

  return (
    <>
      <Link to="/projects">
        <div
          id="Projects"
          className={isProject ? "Project" : "Projects"}
          onClick={changeSport}
        ></div>
      </Link>
    </>
  );
};
