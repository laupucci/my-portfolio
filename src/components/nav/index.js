import React, { useEffect, useState, useRef } from "react";
import { BiWorld, BiMoon } from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { languages } from "./languages";
import { Container, LanguageCont } from "./style";
import { Link as ScrollLink } from "react-scroll";
import menuHamb from "../../media/menu.svg";
import x from "../../media/x.svg";
import { MdKeyboardArrowUp } from "react-icons/md"
import FooterMedia from "../footer/footerMedia";
const Navbar = ({ language, setLanguage, theme, setTheme }) => {
  const [active, setActive] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const closer = useRef(null);
  const opener = useRef(null);
  const menu = useRef(null);
  const handleLanguage = (ev) => {
    if (ev.target.id) {
      setLanguage(ev.target.id);
      localStorage.setItem("language", ev.target.id);
    }
  };

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll) setActive(true);
    else setActive(false);
  };

  const handleThemeChange = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleClick = () => {
    if (sidebar) {
      opener.current.classList.add("active");
      closer.current.classList.remove("active");
      menu.current.classList.remove("active");
    } else {
      opener.current.classList.remove("active");
      closer.current.classList.add("active");
      menu.current.classList.add("active");
    }
    setSidebar(!sidebar);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container active={active}>
      <div className="logo_container">
        <ScrollLink to="home" smooth={true} duration={500}>
          <p className="logo">Laura Puccinelli | Full Stack Developer</p>
        </ScrollLink>{" "}
      </div>
      <img
        className="menu_open active"
        onClick={handleClick}
        ref={opener}
        src={menuHamb}
        alt="Abrir Menu"
      />
      <img
        className="menu_close"
        onClick={handleClick}
        ref={closer}
        src={x}
        alt="Cerrar Menu"
      />
      <nav ref={menu} onClick={handleClick} className="menu">
        <ScrollLink
          className="menu_item"
          to="tecnologias"
          smooth={true}
          duration={400}
        >
          <p className="pMenuItems">{languages[language]?.tecnologies}</p>
        </ScrollLink>

        <ScrollLink
          className="menu_item"
          to="proyectos"
          smooth={true}
          duration={400}
        >
          <p className="pMenuItems">{languages[language]?.projects}</p>
        </ScrollLink>

        <ScrollLink
          className="menu_item"
          to="contacto"
          smooth={true}
          duration={400}
        >
          <p className="pMenuItems">{languages[language]?.contact}</p>
        </ScrollLink>

        {theme === "dark" ? (
          <button className="theme" onClick={handleThemeChange}>
            <ImSun className="iconTheme" />
            <p className="pTheme">{languages[language].light}</p>
          </button>
        ) : (
          <button className="theme" onClick={handleThemeChange}>
            <BiMoon className="iconTheme" />
            <p className="pTheme">{languages[language].dark}</p>
          </button>
        ) }
        {language === "en" ? (
          <button id="es" className="buttonLanguage" onClick={handleLanguage}>
            Es
          </button>
        ) : (
          <button id="en" className="buttonLanguage" onClick={handleLanguage}>
            En
          </button>
        )}
        <LanguageCont>
          <BiWorld className="icon" />
          <ul className="list" onClick={handleLanguage}>
              <p className="pLanguage">{languages[language]?.language}</p>
            <li>
                <button id="en" className="btnLanguage">
                  {languages[language]?.language_en}
                </button>
            </li>
            <li>
                <button id="es" className="btnLanguage">
                  {languages[language]?.language_es}
                </button>
            </li>
          </ul>
        </LanguageCont>
        <div className="mobile">
          <FooterMedia language={language}/>
        </div>
      </nav>
        <ScrollLink to="home" smooth={true} duration={500} className="top">
          <MdKeyboardArrowUp/>
        </ScrollLink>
    </Container>
  );
};

export default Navbar;
