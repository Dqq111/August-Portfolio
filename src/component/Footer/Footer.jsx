import "./Footer.css";

import Github from "../../assest/github-logo.png";
import LinkedIn from "../../assest/linkedin.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="linkImgs">
        <a
          href="https://github.com/Dqq111"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkImg">
            <img src={Github} alt="github img" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/august-nguyen-ab691920a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="linkImg">
            <img src={LinkedIn} alt="LinkedIn img" />
          </div>
        </a>
      </div>
      August Nguyen &#169;2023
    </footer>
  );
}
