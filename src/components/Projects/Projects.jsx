import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { Element } from "react-scroll";

import "./Projects.css";
import { projects } from "../../constants/projectConstants";

const Projects = () => {
  return (
    <div className="container">
      <Element name="portfolio"></Element>
      <div className="heading">Recently Projects</div>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-12 col-md-6 col-xl-4 mb-5" key={index}>
            <div className="image__or__iframe">
              <img src={project.image} alt="" />
            </div>
            <div className="description p-3">
              <h3 className="title">{project.title}</h3>
              <div>{project.desc}</div>

              <div>
                <div className="techUsed">
                  {project.techUsed.map((tech) => (
                    <>
                      <div className="tech">{tech}</div>
                    </>
                  ))}
                </div>
              </div>
              <div className="projects__buttons">
                {project?.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub className="projects__icon" />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BiLinkExternal className="projects__icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
