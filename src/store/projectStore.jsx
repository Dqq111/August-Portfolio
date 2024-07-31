import { createContext } from "react";

export const ProjectsContext = createContext({
  projects: [],
});

export default function ProjectsContextProvider({ children }) {
  const myProjects = [
    {
      hrefLive: "https://hopefullyhelp.netlify.app/",
      hrefGithub: "https://github.com/Dqq111/Experience",
      imgSrc: "/images/project4.png",
      imgAlt: "Website Project",
      projectTitle1: "My Skillset",
      projectTitle2: "Website Page",
      projectDesc:
        "This website highlights my experience and skills, gained through both professional work and self-study, to showcase my current abilities. It is not complete yet. I am currently designing the layout.",
    },
    {
      hrefLive: "https://stressreducer.netlify.app/",
      hrefGithub: "https://github.com/Dqq111/JS-Map-Project",
      imgSrc: "/images/project1.png",
      imgAlt: "Map Project",
      projectTitle1: "Stress Reducer",
      projectTitle2: "Map App",
      projectDesc:
        "Track past activities and favorite restaurants on an interactive map that displays your current location, built using HTML, CSS, and JavaScript",
    },
    {
      hrefLive: "https://hopefullyuseful.netlify.app/",
      hrefGithub: "https://github.com/Dqq111/React-Note",
      imgSrc: "/images/project2.png",
      imgAlt: "To-Do",
      projectTitle1: "To-Do List",
      projectTitle2: "Productive App",
      projectDesc:
        "Organize tasks efficiently with an intuitive design and seamless usability, powered by HTML, CSS, JavaScript, and React.",
    },
    {
      hrefLive: "https://pockettracker.netlify.app/",
      hrefGithub: "https://github.com/Dqq111/React-Expense-Tracker",
      imgSrc: "/images/project3.png",
      imgAlt: "Expense Tracker App",
      projectTitle1: "Pocket Hole",
      projectTitle2: "Expense Tracker App",
      projectDesc:
        "Simplify budget management by enabling users to effortlessly monitor and categorize their spending, leveraging HTML, CSS, JavaScript, and React for a seamless experience.",
    },
  ];

  const ProjectCtxValue = {
    projects: myProjects,
  };

  return (
    <ProjectsContext.Provider value={ProjectCtxValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
