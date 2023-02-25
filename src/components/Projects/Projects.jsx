import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { Element } from "react-scroll";

import "./Projects.css";
import { projects } from "../../constants/projectConstants";

const Projects = () => {
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
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="projects__icon" />
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
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
