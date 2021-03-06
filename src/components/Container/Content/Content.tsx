import * as React from "react";
import "./Content.less";
import { Switch, Route } from "react-router-dom";
import {contProjects} from "../Content/Contents/contProjects";
import {contAboutme} from "../Content/Contents/contAboutme";
import {contName} from "../Content/Contents/contName";

export const Content: React.FC = () => {
  return (
    <>
    
        <div id="Content" className="Content"></div>
    <Switch>
    <Route path="/" exact component={contName} />
    <Route path="/projects" component={contProjects}/>
    <Route path="/aboutme" component={contAboutme} />
    </Switch>
      
    </>
  );
};
