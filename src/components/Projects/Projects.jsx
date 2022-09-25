import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { Element } from "react-scroll";

import "./Projects.css";
import instaClone from "../../images/mern__insta__clone.JPG";
import phpInstaClone from "../../images/php__insta__clone.JPG";
import amazonClone from "../../images/amazon__clone.JPG";
import whatsappClone from "../../images/whatsapp__clone.JPG";
import ticTacToe from "../../images/ticTacToe.JPG";

const Projects = () => {
  const projects = [
    {
      title: "MERN Social",
      image: instaClone,
      desc: `This is a clone projects in which I have tried to copy instagram
      design and some functionalities. This is developed by using MERN
      technology. Some of the feature of this react app is adding a post ,
      update post , delete post , like post , save post , comment ,
      authentication system using JWT , edit profile , follow a user and
      explore section etc.`,
      techUsed: [
        "Tailwind Css",
        "ReactJS",
        "NodeJS",
        "MongoDB",
        "ExpressJS",
        "React-Redux",
        "JWT",
        "Axios",
      ],
      github: "https://github.com/codewithsahil/mern-insta-clone",
      link: "https://mern-instagram-clone.blackdevil.in/",
    },
    {
      title: "E-commerce",
      image: amazonClone,
      desc: `This is an e-commerce website. This is developed by using MERN + NEXT
      js technology. Some of the feature of this next app is routing, add to
      cart , update cart , product details page and checkout using STRIPE
      etc. Feel free to check out th e full fuctionality. For payment press
      4 and 2 multiple times as test card credentials.`,
      techUsed: [
        "NextJS",
        "ReactJS",
        "NodeJS",
        "Sanity",
        "Stripe",
        "reactContext",
      ],
      github: "https://github.com/codewithsahil/eCommerce_nextjs_sanity_stripe",
      link: "https://e-commerce-nextjs-sanity-stripe.vercel.app/",
    },
    {
      title: "RealTime Chat",
      image: whatsappClone,
      desc: `This is a real time chat application. This is developed by using MERN
      + Socket.io . Some of the feature of this react app is routing,
      login/register , view profile , create chat , real time messages and
      notifications etc. Feel free to check out full fuctionality. You can
      also login with Guest Users to save your time.`,
      techUsed: [
        "MaterialUI",
        "NodeJS",
        "ReactJS",
        "MongoDB",
        "react-redux",
        "socket.io",
      ],
      github: "https://github.com/codewithsahil/mern-socket-io-chat-app",
      link: "https://mern-chat-app-socket.herokuapp.com/",
    },
    {
      title: "TicTacToe",
      image: ticTacToe,
      desc: `This is a simple tic tac toe game which we must have palyed sometime
      in our childhood on paper. This is built by using React js and simple
      css. This app has results like win/loose and Tie. And also theme
      functionality - Light/Dark`,
      techUsed: ["Css", "ReactJS"],
      github: "https://github.com/codewithsahil/tic-tact-toe-reactjs",
      link: "http://tictactoe.blackdevil.in/",
    },
    {
      title: "PHP Social",
      image: phpInstaClone,
      desc: `This is a clone projects in which I have tried to copy instagram
      design and some functionalities. This is developed by using core PHP , javascript , ajax. Some of the feature of this website is adding a post ,
      update post , delete post , like post , save post , comment ,
      authentication system , edit profile , follow a user and
      explore section etc.`,
      techUsed: ["Bootstrap", "Javascript", "Ajax", "MySql", "core PHP"],
      github: "https://github.com/codewithsahil/mern-insta-clone",
      link: "http://instaclone.blackdevil.in/",
    },
  ];
  return (
    <div className="projects__section">
      <Element name="portfolio"></Element>
      <div className="heading">Recently Projects</div>
      {projects.map((project, index) => (
        <div className="project__container" key={index}>
          <div className="image__or__iframe">
            <img src={project.image} alt="" />
          </div>
          <div className="description">
            <h3 className="title">{project.title}</h3>
            <div>{project.desc}</div>

            <div>
              <div className="techUsed">
                {project.techUsed.map((tech, index) => (
                  <>
                    <span className="tech">{tech}</span>
                    {index === 2 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    {index === 5 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="projects__buttons">
              <a href={project.github} target="_blank">
                <BsGithub className="projects__icon" />
              </a>
              <a href={project.link} target="_blank">
                <BiLinkExternal className="projects__icon" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
