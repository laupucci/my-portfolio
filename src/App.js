import React, { useState } from "react";
import Background from "./components/background";
import Navbar from "./components/nav";
import Home from "./components/home";
import Tecnologies from "./components/tecnologies";
import Projects from "./components/projects";
import Contact from "./components/contact";
require("dotenv").config();

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  return (
  <>
  <Background theme={theme} setTheme={setTheme}/>
  <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
    <div>
    <Home language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
    <Tecnologies language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
    <Projects language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
    <Contact language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}
    />
    </div>
  </>
  )
}

export default App;
