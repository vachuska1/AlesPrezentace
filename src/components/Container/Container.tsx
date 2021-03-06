import * as React from "react";
import "./Container.less";
import { BrowserRouter } from "react-router-dom";
import { Ledge } from "./Ledge/Ledge";
import { Content } from "./Content/Content";

export const Container: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="Container">
        <Ledge />
        <Content />
      </div>
    </BrowserRouter>
  );
};
