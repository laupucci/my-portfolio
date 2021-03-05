import React from "react";
import Home from "./components/home";
import Tecnologies from "./components/tecnologies";
import Projects from "./components/projects";
import Contact from "./components/contact";

const Scroll = ({ language, theme }) => {

  return (
    <>
      <Home language={language} theme={theme} />
      <Tecnologies language={language} theme={theme}  />
      <Projects language={language} theme={theme} />
      <Contact language={language} theme={theme} />
    </>
  );
};

export default Scroll;
