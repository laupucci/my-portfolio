import React, { useEffect, useState } from "react";
import { BiWorld, BiMoon } from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { languages } from "./languages";
import { Link } from "react-router-dom";
import { Container, LanguageCont } from "./style";
import { Link as ScrollLink } from "react-scroll";
//{ language, setLanguage }
const Navbar = ({ language, setLanguage, theme, setTheme }) => {
  const [active, setActive] = useState(false);
  console.log(theme);
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container active={active}>
      <ScrollLink to="home" smooth={true} duration={500}>
        <p className="logo">Laura Puccinelli | Full Stack Developer</p>
      </ScrollLink>{" "}
      <nav className="menu">
        <ScrollLink to="tecnologias" smooth={true} duration={400}>
          <p className="p2">{languages[language]?.tecnologies}</p>
        </ScrollLink>

        <ScrollLink to="proyectos" smooth={true} duration={400}>
          <p className="p2">{languages[language]?.projects}</p>
        </ScrollLink>

        <ScrollLink to="contacto" smooth={true} duration={400}>
          <p className="p2">{languages[language]?.contact}</p>
        </ScrollLink>
        <button className="theme" onClick={handleThemeChange}>
          {theme === "dark" ? (
            <BiMoon className="iconTheme" />
          ) : (
            <ImSun className="iconTheme" />
          )}
          <p className="pTheme">{languages[language].theme}</p>
        </button>
        <LanguageCont>
          <BiWorld className="icon" />
          <ul className="list" onClick={handleLanguage}>
            {theme === "dark" ? (
              <p className="p1">{languages[language]?.language}</p>
            ) : (
              <p className="p1Ligth">{languages[language]?.language}</p>
            )}
            <li>
            {theme === "dark" ? (
              <button id="en" className="btnLanguage">
                  {languages[language]?.language_en}
              </button>
                ) : (
              <button id="en">
                  {languages[language]?.language_en}
              </button>
                )}
            </li>
            <li>
            {theme === "dark" ? (
              <button id="es" className="btnLanguage">
                  {languages[language]?.language_es}
              </button>
                ) : (
              <button id="es">
                  {languages[language]?.language_es}
              </button>
                )}
            </li>
          </ul>
        </LanguageCont>
      </nav>
      {theme === "dark" ? (
      <ScrollLink to="home" smooth={true} duration={500} className="top">
        <span>^</span>
      </ScrollLink>) : (
      <ScrollLink to="home" smooth={true} duration={500} className="topLight">
      <span>^</span>
    </ScrollLink>
      )}
    </Container>
  );
};

export default Navbar;
