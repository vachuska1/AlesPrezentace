import * as React from "react";
import "./Menu.less";
import { BrowserRouter } from "react-router-dom";
import { Projects } from "./Projects/Projects";
import { Aboutme } from "./Aboutme/Aboutme";
import { Search } from "./Search/Search";
import { English } from "./English/English";
import { Menubutton } from "./Menubutton/Menubutton";

export const Menu: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="Menu">
        <Projects />
        <Aboutme />
        <English />
        <Search />
        <Menubutton />
      </div>
    </BrowserRouter>
  );
};
