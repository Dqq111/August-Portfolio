import "./Home.css";

import DownArrow from "../../assest/down-arrow.png";

export default function Home() {
  return (
    <section id="home">
      <p className="hello">Hi, my name is </p>
      <h1 className="introName">August Nguyen</h1>
      <h2 className="introJob">An Aspiring Front End Developer.</h2>
      {/* <p className="introPara">
        I am an aspiring Front End Developer dedicated to mastering HTML, CSS,
        JavaScript, and the React Framwork, with hands-on-experience through
        personal projects and coursework.
      </p>
      <div className="languageIcons">
        <img src={HTML} alt="HTML logo" className="languageIcon" />
        <img src={CSS} alt="CSS logo" className="languageIcon" />
        <img src={JavaScript} alt="JS logo" className="languageIcon" />
        <img src={React} alt="React logo" className="languageIcon" />
      </div> */}

      <a href="#works" className="heading-link">
        View my work <img src={DownArrow} alt="down arrow" className="arrow" />
      </a>
    </section>
  );
}
