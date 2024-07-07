export default function InputProject({
  hrefLive,
  hrefGithub,
  imgSrc,
  imgAlt,
  projectTitle1,
  projectTitle2,
  projectDesc,
}) {
  return (
    <div className="project">
      <a href={hrefLive} target="_blank" rel="noopener noreferrer">
        <div className="projectImg">
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </a>
      <div className="projectInfo">
        <h4 className="projectTitle">
          {projectTitle1} <br /> {projectTitle2}
        </h4>
        <p className="projectDescription">{projectDesc}</p>
        <a href={hrefLive} target="_blank" rel="noopener noreferrer">
          Live app
        </a>
        <a href={hrefGithub} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>
    </div>
  );
}
