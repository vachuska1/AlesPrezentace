import * as React from "react";
import "./Aboutme.less";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

export const Aboutme: React.FC = () => {
  const [isEnglish, setEnglish] = useState(false);

  return (
    <BrowserRouter>
      <div id="Aboutme" className={isEnglish ? "Aboutme" : "Aboutme1"}></div>
    </BrowserRouter>
  );
};
