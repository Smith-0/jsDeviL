import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { Element } from "react-scroll";

import "./About.css";
import myImage from "../../images/my_image.jpg";

const About = () => {
  return (
    <div className="About" id="#about">
      <Element name="about"></Element>
      {/* <div className="love__section">
        <div className="heading">
          <div>I </div>
          <BsFillSuitHeartFill className="heart__icon" /> LOVE
        </div>
        <div className="cards">
          <div className="tech__card">
            <div className="love__icon__container">
              <IoLogoReact className="love__icon" />
            </div>
            <div className="love__text">
              It makes the frotnend part so easy but magnificent. I think it's
              the reason why I'm so obsessed with frontend.
            </div>
          </div>
          <div className="tech__card">
            <div className="love__icon__container">
              <IoLogoJavascript className="love__icon" />
            </div>
            <div className="love__text">
              I started with javascript And now I'm in love. Yes we fight
              sometimes but you know every relationships have
              issues/bugs/errors.
            </div>
          </div>
          <div className="tech__card">
            <div className="love__icon__container">
              <IoLogoNodejs className="love__icon" />
            </div>
            <div className="love__text">
              I think it completes the family. Which can manage everything , And
              it is intersting to explore this family member.
            </div>
          </div>
        </div>
      </div> */}

      <div className="about__me">
        <div className="main__image__text">
          <img className="my__image" src={myImage} />
          <div className="text">
            <div class="container">
              <p>
                My name is Sahil Ghangash, a self-taught full stack developer
                with over three years of experience in the web development
                field. My journey began during my second year of college when I
                co-founded a startup with a friend. We needed a functional
                website to launch, which led me to dive into web development,
                starting with basic HTML, CSS, and JavaScript, along with PHP
                for backend work. From there, I found my passion for development
                and never looked back.
              </p>
              <p>
                Currently, I specialize in the MERN stack and have been working
                at Apwrk Solutions for the past two years, where I’ve had the
                opportunity to contribute to{" "}
                <strong>four Unilever projects</strong>. Among these, I played a
                key role in <strong>Mesha</strong>, a finance management
                application, where I focused primarily on the UI, utilizing{" "}
                <strong>Next.js</strong>. Additionally, I contributed to:
              </p>
              <ul>
                <li>
                  A dynamic <strong>reports management tool</strong>, enabling
                  users to generate pages, actions, and filters based on their
                  needs.
                </li>
                <li>
                  A customizable <strong>dashboard</strong> that supports
                  drag-and-drop functionality, allowing users to reposition
                  modules, and adjust height and width to their preference.
                </li>
                <li>
                  <strong>Intelliyard</strong>, a seamless driver check-in and
                  checkout system using RFID for trailer parking management,
                  catering to four different user roles: drivers, validators,
                  spotters, and carriers.
                </li>
              </ul>
              <p>
                In addition to my work at Appwrk IT Solutions, I provide
                freelance consultancy services through{" "}
                <strong>TechTip24</strong>, a platform offering live interactive
                sessions and consultancy for individuals aspiring to build
                careers in fields such as Data Science, Business Intelligence,
                and Data Analytics using various tools and technologies.
              </p>
              <p>
                Working as a developer can often bring its share of challenges,
                but the satisfaction of solving complex issues makes it a
                rewarding experience. I am committed to continuous learning and
                growing as a developer, always striving to stay at the forefront
                of new and evolving technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
