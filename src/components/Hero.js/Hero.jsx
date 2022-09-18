import React, { useEffect, useRef } from "react";
import { BsTwitter, BsGithub, BsYoutube } from "react-icons/bs";

import "./Hero.css";
import triangleImage from "../../images/hero_triangle_shape.png";
import introCode from "../../images/introCode.JPG";
import introCodeDark from "../../images/introCode_dark.png";

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
      <img className="triangle__image" src={triangleImage} />
      <img id="introCode" src="" ref={imageRef} />
      <div className="intro__container">
        <div className="text__one">Hello I'm</div>
        <div className="text__name">SAHIL</div>
        <div className="text__two">FULL STACK DEVELOPER</div>

        <button className="btn">Download Resume</button>

        <div className="social__icons">
          <BsGithub className="social__icon" />
          <BsTwitter className="social__icon" />
          <BsYoutube className="social__icon" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
