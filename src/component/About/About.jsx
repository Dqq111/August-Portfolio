import "./About.css";

import HTML from "../../assest/html.png";
import CSS from "../../assest/css-3.png";
import JavaScript from "../../assest/js.png";
import React from "../../assest/react.png";
import Git from "../../assest/Git-logo.png";
import WebDesign from "../../assest/website-design.png";
import AppDesign from "../../assest/app-design.png";

export default function About() {
  return (
    <section id="about">
      <h2>What I do</h2>
      <p>
        As someone who values lifelong learning, I bring enthusiasm and
        creativity to my work as a web designer, focusing on crafting visually
        appealing and user-friendly websites. The combination of creativity,
        logical problem-solving, and ever-evolving technology fuels my passion
        for web development. When my eyes are sore, I like to spend my time
        playing tennis and catching up with the news.
      </p>
      <div className="language">
        <img src={HTML} alt="HTML logo" />
        <img src={CSS} alt="CSS logo" />
        <img src={JavaScript} alt="JS logo" />
        <img src={React} alt="React logo" />
        <img src={Git} alt="Git logo" />
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h3 className="skillBarHeading">Website Design</h3>
            <p className="skillBarPara">
              designing visually appealing and user-friendly websites that
              enhance user engagement.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h3 className="skillBarHeading">App Design</h3>
            <p className="skillBarPara">
              creating intuitive and responsive app designs that ensure a
              seamless and enjoyable user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
