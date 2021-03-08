import * as React from "react";
import "./Container.less";
import { Menu } from "./Ledge/Menu/Menu";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Aboutme } from "../Container/Content/Contents/Aboutme";
import { Project } from "../Container/Content/Contents/Project";
import { Name } from "../Container/Content/Contents/Name";

export const Container: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="Container">
        <Menu />
        <Switch>
          <Route path="/" exact component={Name} />
          <Route path="/projects" component={Project} />
          <Route path="/aboutme" component={Aboutme} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
