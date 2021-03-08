import * as React from "react";
import "./Menu.less";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Menu: React.FC = () => {
  const [click, setClick] = useState(false);
  const [language, setLanguage] = useState(false);
  const [close, setClose] = useState(false);
  const [night, setNight] = useState(false);
  const [isChange, setChange] = useState(false);

  const Doublechange = () => {
    setClose(!close);
    setClick(!click);
  };
  const changePage = (event) => {
    document.body.className = "";
    document.body.classList.add(event.currentTarget.id);
  };
  const refreshPage = () => {
    window.location.href = "/";
  };
  const toggleChange = () => {
    const switcher = document.getElementById("Menu")!;
    if (switcher.classList.contains("Menu--night")) {
      switcher.classList.remove("Menu--night");
    } else {
      switcher.classList.add("Menu--night");
    }
    const switcher1 = document.getElementById("project")!;
    if (switcher1.classList.contains("Menu__tabs--project--night")) {
      switcher1.classList.remove("Menu__tabs--project--night");
    } else {
      switcher1.classList.add("Menu__tabs--project--night");
    }
    const switcher2 = document.getElementById("aboutme")!;
    if (switcher2.classList.contains("Menu__tabs--aboutme--night")) {
      switcher2.classList.remove("Menu__tabs--aboutme--night");
    } else {
      switcher2.classList.add("Menu__tabs--aboutme--night");
    }
    const switcher3 = document.getElementById("name")!;
    if (switcher3.classList.contains("Menu__logo--night")) {
      switcher3.classList.remove("Menu__logo--night");
    } else {
      switcher3.classList.add("Menu__logo--night");
    }
    const switcher4 = document.getElementById("search")!;
    if (switcher4.classList.contains("Menu__search--night")) {
      switcher4.classList.remove("Menu__search--night");
    } else {
      switcher4.classList.add("Menu__search--night");
    }
    const switcher5 = document.getElementById("menubutton")!;
    if (switcher5.classList.contains("Menu__menubutton--night")) {
      switcher5.classList.remove("Menu__menubutton--night");
    } else {
      switcher5.classList.add("Menu__menubutton--night");
    }
  };

  return (
    <div className="Menu" id="Menu">
      <Link to="/" refresh={true}>
        <div
          id="name"
          className="Menu__logo"
          onClick={changePage}
          onClickCapture={refreshPage}
        >
          Aleš Vachuška, Ing.
        </div>
      </Link>
      <div className="Menu__block">
        <div className={`Menu__tabs ${click ? "Menu__tabs--active" : ""}`}>
          <Link to="/projects">
            {" "}
            <div
              id="project"
              className="Menu__tabs--project"
              onClick={changePage}
              onClickCapture={Doublechange}
            >
              Projects
            </div>{" "}
          </Link>
          <Link to="/aboutme">
            {" "}
            <div
              id="aboutme"
              className="Menu__tabs--aboutme"
              onClick={changePage}
              onClickCapture={Doublechange}
            >
              About me
            </div>{" "}
          </Link>
        </div>
        <div id="search" className="Menu__search" />
        <div
          className={`"Menu__flag" ${
            language ? "Menu__flag--czech" : "Menu__flag"
          }`}
          onClick={() => setLanguage(!language)}
        />
        <div
          className={`"Menu__day" ${night ? "Menu__day--night" : "Menu__day"}`}
          onClick={() => setNight(!night)}
          onClickCapture={toggleChange}
        />
        <div
          id="menubutton"
          className={`"Menu__menubutton" ${
            close ? "Menu__menubutton--close" : "Menu__menubutton"
          }`}
          onClick={() => Doublechange()}
        />
      </div>
    </div>
  );
};
