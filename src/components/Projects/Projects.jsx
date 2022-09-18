import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { Element } from "react-scroll";

import "./Projects.css";
import amazonClone from "../../images/amazon__clone.JPG";
import ticTacToe from "../../images/ticTacToe.JPG";

const Projects = () => {
  return (
    <div className="projects__section">
      <Element name="portfolio"></Element>
      <div className="heading">Recently Projects</div>
      <div className="project__container">
        <div className="image__or__iframe">
          <iframe
            src="https://mern-instagram-clone.blackdevil.in/"
            frameborder="0"
          ></iframe>
        </div>
        <div className="description">
          This is a clone projects in which I have tried to copy instagram
          design and some functionalities. This is developed by using MERN
          technology. Some of the feature of this react app is adding a post ,
          update post , delete post , like post , save post , comment ,
          authentication system using JWT , edit profile , follow a user and
          explore section etc.
          <div className="projects__buttons">
            <a
              href="https://github.com/codewithsahil/mern-insta-clone"
              target="_blank"
            >
              <BsGithub className="projects__icon" />
            </a>
            <a
              href="https://mern-instagram-clone.blackdevil.in/"
              target="_blank"
            >
              <BiLinkExternal className="projects__icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project__container">
        <div className="image__or__iframe">
          <img src={amazonClone} alt="" />
        </div>
        <div className="description">
          This is an e-commerce website. This is developed by using MERN + NEXT
          js technology. Some of the feature of this next app is routing, add to
          cart , update cart , product details page and checkout using STRIPE
          etc. Feel free to check out th e full fuctionality. For payment press
          4 and 2 multiple times as test card credentials.
          <div className="projects__buttons">
            <a
              href="https://github.com/codewithsahil/eCommerce_nextjs_sanity_stripe"
              target="_blank"
            >
              <BsGithub className="projects__icon" />
            </a>
            <a
              href="https://e-commerce-nextjs-sanity-stripe.vercel.app/"
              target="_blank"
            >
              <BiLinkExternal className="projects__icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="project__container">
        <div className="image__or__iframe">
          <img src={ticTacToe} />
        </div>
        <div className="description">
          This is a simple tic tac toe game which we must have palyed sometime
          in our childhood on paper. This is built by using React js and simple
          css. This app has results like win/loose and Tie. And also theme
          functionality - Light/Dark
          <div className="projects__buttons">
            <a
              href="https://github.com/codewithsahil/mern-insta-clone"
              target="_blank"
            >
              <BsGithub className="projects__icon" />
            </a>
            <a href="http://tictactoe.blackdevil.in/" target="_blank">
              <BiLinkExternal className="projects__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
