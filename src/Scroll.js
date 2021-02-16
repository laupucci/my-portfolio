import React from "react";
import Home from "./components/home";
import Tecnologies from "./components/tecnologies";
import Projects from "./components/projects";
import Contact from "./components/contact";

const Scroll = ({language, setLanguage}) => {

  return (
    <>
      <Home language={language} setLanguage={setLanguage}/>
      <Tecnologies language={language} setLanguage={setLanguage}/>
      <Projects language={language} setLanguage={setLanguage}/>
      <Contact language={language} setLanguage={setLanguage}/>
    </>
  );
};

export default Scroll;
