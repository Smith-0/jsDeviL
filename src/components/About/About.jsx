import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { Element } from "react-scroll";

import "./About.css";
import myImage from "../../images/my__image.jpg";

const About = () => {
  return (
    <div className="About" id="#about">
      <Element name="about"></Element>
      <div className="love__section">
        <div className="heading">
          <div>I </div>
          <BsFillSuitHeartFill className="heart__icon" /> LOVE
        </div>
        <div className="cards">
          <div className="card">
            <div className="love__icon__container">
              <IoLogoReact className="love__icon" />
            </div>
            <div className="love__text">
              It makes the frotnend part so easy but magnificent. I think it's
              the reason why I'm so obsessed with frontend.
            </div>
          </div>
          <div className="card">
            <div className="love__icon__container">
              <IoLogoJavascript className="love__icon" />
            </div>
            <div className="love__text">
              I started with javascript And now I'm in love. Yes we fight
              sometimes but you know every relationships have
              issues/bugs/errors.
            </div>
          </div>
          <div className="card">
            <div className="love__icon__container">
              <IoLogoNodejs className="love__icon" />
            </div>
            <div className="love__text">
              I think it completes the family. Which can manage everything , And
              it is intersting to explore this family member.
            </div>
          </div>
        </div>
      </div>

      <div className="about__me">
        <div className="main__image__text">
          <img className="my__image" src={myImage} />
          <div className="text">
            hello there! I'm sahil ghangash a self-taught full stack developer.
            I started my web development journey about 3 years ago when I'm in
            2nd year of college. Me and my friend were working on a startup we
            needed a website to run. So I started learning web development. I
            started with the simplest html , css , js and for backend PHP. The
            startup is a different story for different time. But because of this
            I entered in web development field and never looked back. Currently
            I am working in MERN stack which is a long way from php. Working as
            as a programmer/developer sometimes give you highest furstration but
            when you solve the issue it gives you maximum satisfaction. Overall
            it's good
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
