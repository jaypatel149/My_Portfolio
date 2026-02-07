import "./About.css";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import CTA from "./CTA";

const About = () => {
  const textRef = useRef(null);
  const typedOnce = useRef(false);

  useEffect(() => {
    if (textRef.current && !typedOnce.current) {
      typedOnce.current = true;

      init(textRef.current, {
        strings: [
          "React Js Developer",
          "Content Creator",
          "Self Learner",
          "Problem Solving",
        ],
        backDelay: 1500,
        backSpeed: 60,
        typeSpeed: 80,
        showCursor: true,
        cursorChar: "|",
      });
    }
  }, []);

  return (
    <div className="container-flued px-5 py-4">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="image-contant">
            <img src="/assests/jpp.jpeg" alt="..." />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="intro">
            <h2>Hello 👋🏻 I'm</h2>
            <h1>Jayprakash Patel</h1>
            <h3>
              Frontend --&nbsp; <span ref={textRef}></span>
            </h3>
            <CTA />
            <div className="pt-2">
              <h2>About Me</h2>
              <h5 style={{ fontStyle: "oblique" }}>
                I am from Uttar Pradesh and currently working as a React.js
                Developer. I have always had a strong interest in computers and
                technology, which inspired me to pursue a career as a Software
                Engineer and make my family proud.
                <br />
                <br />
                I completed my school education from a private institution and
                developed a deep interest in modern technologies. I am currently
                learning and enhancing my skills at Navgurukul, where I have
                gained hands-on experience in Python, JavaScript, React.js,
                HTML5, CSS3, Bootstrap, tailwind css , Ant design Material UI, Reactstrap, and Redux.
                <br />
                <br />I am a continuous learner who is passionate about building
                user-friendly web applications and improving my technical skills
                every day.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
