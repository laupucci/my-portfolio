import React from "react";
import Home from "./components/home";
import Tecnologies from "./components/tecnologies";
import Projects from "./components/projects";
import Contact from "./components/contact";

const Scroll = ({language, setLanguage, theme, setTheme}) => {

  return (
    <>
      <Home language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
      <Tecnologies language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
      <Projects language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
      <Contact language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
    </>
  );
};

export default Scroll;
