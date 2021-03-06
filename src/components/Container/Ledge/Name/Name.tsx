import * as React from "react";
import "./Name.less";
import { BrowserRouter as Link } from "react-router-dom";

export const Name: React.FC = () => {
  const changeSport2 = (event) => {
    document.body.className = "";
    document.body.classList.add(event.currentTarget.id);
  };
  return (
    <Link to="/">
      <div id="name" className="Name" onClick={changeSport2}>
        {" "}
        Aleš Vachuška, Ing.
      </div>
    </Link>
  );
};
