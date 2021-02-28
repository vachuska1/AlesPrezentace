import * as React from "react";
import "./Container.less";
import { BrowserRouter } from "react-router-dom";
import { Ledge } from "./Ledge/Ledge";

export const Container: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="Container">
        <Ledge />
      </div>
    </BrowserRouter>
  );
};
