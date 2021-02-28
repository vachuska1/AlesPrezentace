import * as React from "react";
import "./Name.less";
import { BrowserRouter } from "react-router-dom";

export const Name: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="Name"> Aleš Vachuška, Ing.</div>
    </BrowserRouter>
  );
};
