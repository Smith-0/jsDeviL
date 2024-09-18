import React, { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

import "./Hero.css";
import triangleImage from "../../images/hero_triangle_shape.png";
import introCode from "../../images/introCode.JPG";
import introCodeDark from "../../images/introCode_dark.png";
import CV from "../../doc/sahil_resume.pdf";

const Hero = ({ theme }) => {
  const imageRef = useRef();
  useEffect(() => {
    if (theme === "dark") {
      imageRef.current.src = introCodeDark;
    } else {
      imageRef.current.src = introCode;
    }
  }, [theme]);
  return (
    <div className="hero__container">
      <img
        className="triangle__image"
        src={triangleImage}
        alt="decorative_images"
      />
      <img id="introCode" src="" ref={imageRef} alt="decorative_images" />
      <div className="intro__container">
        <div className="text__one">Hello I'm</div>
        <div className="text__name">SAHIL</div>
        <div className="text__two">FULL STACK DEVELOPER</div>

        <a className="btn" href={CV} download>
          Download Resume
        </a>

        <div className="social__icons">
          <a
            href="https://github.com/Smith-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="social__icon" />
          </a>
          {/* <a
            href="https://twitter.com/SahilGhangash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="social__icon" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/sahil-ghangash-2917761b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="social__icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
