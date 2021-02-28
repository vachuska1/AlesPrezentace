import * as React from "react";
import "./Projects.less";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

export const Projects: React.FC = () => {
  const [isProject, setProject] = useState(false);

  return (
    <BrowserRouter>
      <div id="Projects" className={isProject ? "Project" : "Projects"}></div>
    </BrowserRouter>
  );
};
