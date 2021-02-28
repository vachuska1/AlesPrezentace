import * as React from "react";
import "./Ledge.less";
import { Name } from "./Name/Name";
import { Menu } from "./Menu/Menu";
import { BrowserRouter } from "react-router-dom";

export const Ledge: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="Ledge">
        <Name />
        <Menu />
      </div>
    </BrowserRouter>
  );
};
