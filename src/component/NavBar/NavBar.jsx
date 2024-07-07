import { useState } from "react";

import "./NavBar.css";
import Logo from "../../assest/website-logo.avif";
import ContactIcon from "../../assest/contact-me.png";
import BurgerMenuIcon from "../../assest/burger-menu-icon.png";

import { Link } from "react-scroll";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleContactMe() {
    document.getElementById("contactPage").scrollIntoView({
      behavior: "smooth",
    });
  }

  function handleTopPage() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleShowMenu() {
    setShowMenu((prevMenu) => !prevMenu);
  }

  function handleCloseMenu() {
    setShowMenu(false);
  }

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="logo" onClick={handleTopPage} />
      <div className="desktopLinks">
        <Link
          activeClass="active"
          to="home"
          spy
          smooth
          offset={-100}
          className="desktopListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy
          smooth
          offset={-100}
          className="desktopListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy
          smooth
          offset={-100}
          className="desktopListItem"
        >
          Project
        </Link>
      </div>

      <button className="desktopBtn" onClick={handleContactMe}>
        <img src={ContactIcon} alt="Contact Icon" className="desktopMenuImg" />
        Contact Me
      </button>

      <img
        src={BurgerMenuIcon}
        alt="burger menu"
        className="burgerMenu"
        onClick={handleShowMenu}
      />

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="home"
          spy
          smooth
          offset={-100}
          className="menuListItem"
          onClick={handleCloseMenu}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy
          smooth
          offset={-100}
          className="menuListItem"
          onClick={handleCloseMenu}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy
          smooth
          offset={-100}
          className="menuListItem"
          onClick={handleCloseMenu}
        >
          Project
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy
          smooth
          offset={-100}
          className="menuListItem"
          onClick={handleCloseMenu}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
