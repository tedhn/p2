import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

import { gsap } from "gsap";

import { ReactComponent as FB } from "./fb.svg";
import { ReactComponent as IG } from "./ig.svg";
import { ReactComponent as Email } from "./email.svg";
import { ReactComponent as GH } from "./gh.svg";

function App() {
  const timeline = gsap.timeline();
  const timeline2 = gsap.timeline();
  const [t, setT] = useState(false);
  const [h1, setH1] = useState(false);
  const [h2, setH2] = useState(false);
  const [h3, setH3] = useState(false);
  const [h4, setH4] = useState(false);

  useEffect(() => {
    timeline
      .to(".circle", {
        x: t ? 15 : 0,
        duration: 0.5,
        ease: "ease",
      })
      .to(
        ".circle",
        {
          background: t ? "#FFE4AE" : "#ffffff",
          duration: 0.5,
          ease: "ease",
        },
        0
      )
      .to(
        ".circle",
        {
          borderColor: t ? "rgb(248, 207, 123)" : "#51606b",
          duration: 0.5,
          ease: "ease",
        },
        0
      )
      .to(
        ".toggle",
        {
          backgroundColor: t ? "#5dbbfd" : "#353e45",
          duration: 0.5,
          ease: "ease",
        },
        0
      )
      .to(
        ".toggle",
        {
          borderColor: t ? "rgb(248, 207, 123)" : "#51606b",
          duration: 0.5,
          ease: "ease",
        },
        0
      )
      .to(
        ".container",
        {
          backgroundColor: t ? "#FFE4AE" : "#353e45",
          duration: 0.5,
          ease: "ease",
        },
        0
      )
      .to(
        ".container",
        {
          color: t ? "#353e45" : "#ffffff",
          duration: 0.5,
          ease: "ease",
        },
        0
      )
      .to(
        ".svg",
        {
          fill: t ? "#353e45" : "#ffffff",
          duration: 0.5,
          ease: "ease",
        },
        0
      );
  }, [t]);

  useEffect(() => {
    timeline2.to("#one", {
      opacity: h1 ? 1 : 0,
      duration: 1,
      ease: "ease",
    });
  }, [h1]);
  useEffect(() => {
    timeline2.to("#two", {
      opacity: h2 ? 1 : 0,
      duration: 1,
      ease: "ease",
    });
  }, [h2]);
  useEffect(() => {
    timeline2.to("#three", {
      opacity: h3 ? 1 : 0,
      duration: 1,
      ease: "ease",
    });
  }, [h3]);
  useEffect(() => {
    timeline2.to("#four", {
      opacity: h4 ? 1 : 0,
      duration: 1,
      ease: "ease",
    });
  }, [h4]);

  const toggleT = () => {
    setT(!t);
  };
  const toggleH1 = () => {
    setH1(!h1);
  };
  const toggleH2 = () => {
    setH2(!h2);
  };
  const toggleH3 = () => {
    setH3(!h3);
  };
  const toggleH4 = () => {
    setH4(!h4);
  };

  return (
    <div className="container">
      <div className="landing">
        <div className="toggle" onClick={toggleT}>
          <div className="circle"></div>
        </div>
        <div className="text">
          <div className="title">Hi, Im Ted</div>
          <div className="subtitle">Web Dev</div>
          <div className="subtitle">UI & UX designer</div>
        </div>
      </div>
      <div className="about">
        <div className="text">
          <div className="title">About</div>
          <div className="subtitle">
            I am a 21 yo that is passionate about designing websites
          </div>
        </div>
      </div>
      <div className="work">
        <div className="text">Work</div>
        <div
          className="link one"
          onMouseEnter={toggleH1}
          onMouseLeave={toggleH1}
        >
          <a className="title" href="https://tedhn.github.io/windiaMS/">
            <div>WindiaMS</div>
            <div className="desc" id="one">
              A redesign of WindiaMS
            </div>
          </a>
        </div>
        <div
          className="link two"
          onMouseEnter={toggleH2}
          onMouseLeave={toggleH2}
        >
          <a className="title" href="https://tedhn.github.io/lindathai/">
            <div>Linda Thai</div>
            <div className="desc" id="two">
              A portforlio made for Linda Thai
            </div>
          </a>
        </div>
        <div
          className="link three"
          onMouseEnter={toggleH3}
          onMouseLeave={toggleH3}
        >
          <a className="title" href="https://tedhn.github.io/portfolio/">
            <div>Portforlio V1</div>
            <div className="desc" id="three">
              A redesign of WindiaMS
            </div>
          </a>
        </div>
        <div
          className="link four"
          onMouseEnter={toggleH4}
          onMouseLeave={toggleH4}
        >
          <a className="title" href="https://tedhn.github.io/amino/">
            <div>Amino</div>
            <div className="desc" id="four">
              Just a small website using ReactJS
            </div>
          </a>
        </div>
      </div>
      <div className="contact">
        <div className="title">Don't be a stranger</div>
        <div className="subtitle">Feel free to hit me up!</div>
        <div className="bar">
          <a className="icon" href="https://web.facebook.com/htehnd">
            <FB />
          </a>
          <a className="icon" href="https://www.instagram.com/teeedork/?hl=en">
            <IG />
          </a>
          <a className="icon">
            <Email />
          </a>
          <a className="icon" href="https://github.com/tedhn">
            <GH />
          </a>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
