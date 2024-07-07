import "./Project.css";
import { useContext } from "react";

import InputProject from "./InputProject.jsx";
import { ProjectsContext } from "../../store/projectStore";

export default function Project() {
  const { projects } = useContext(ProjectsContext);

  return (
    <section id="works">
      <h2>My Portfolio</h2>
      <p>It is still growing...</p>
      <div className="portfolio">
        {projects.map((project, index) => (
          <InputProject
            key={index}
            hrefLive={project.hrefLive}
            hrefGithub={project.hrefGithub}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
            projectTitle1={project.projectTitle1}
            projectTitle2={project.projectTitle2}
            projectDesc={project.projectDesc}
          />
        ))}

        {/* <InputProject
          hrefLive={"https://stressreducer.netlify.app/"}
          hrefGithub
          imgSrc={Project1}
          imgAlt="Map Project"
          projectTitle1="Stress Reducer"
          projectTitle2="Map App"
          projectDesc="Keep track of past activities and restaurants on a map with user
          current location"
        ></InputProject>

        <InputProject
          hrefLive={"https://stressreducer.netlify.app/"}
          hrefGithub
          imgSrc={Project1}
          imgAlt="Map Project"
          projectTitle1="Stress Reducer"
          projectTitle2="Map App"
          projectDesc="Keep track of past activities and restaurants on a map with user
          current location"
        ></InputProject> */}
        {/*         
        <div className="project">
          <a href="https://stressreducer.netlify.app/" target="blank">
            <div className="projectImg">
              <img src={Project1} alt="Map project" />
            </div>
          </a>
          <div className="projectInfo">
            <h4 className="projectTitle">
              Stress Reducer <br /> Map App
            </h4>
            <p className="projectDescription">
              Keep track of past activities and restaurants on a map with user
              current location
            </p>
          </div>
        </div>

        <div className="project">
          <a href="https://hopefullyuseful.netlify.app/" target="blank">
            <div className="projectImg">
              <img src={Project2} alt="To-Do project" />
            </div>
          </a>
        </div> */}
      </div>
    </section>
  );
}
