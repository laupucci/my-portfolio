import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Background from "./components/background";
import Navbar from "./components/nav";
// import Contact from "./components/contact";
// import Tecnologies from "./components/tecnologies";
// import Projects from "./components/projects";
import Scroll from "./Scroll";
require("dotenv").config();

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  return (
    <BrowserRouter>
      <Route path="/" component={Background} theme={theme} setTheme={setTheme}/>
      <Route path="/" render={() => <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/> } />
      <Route exact path="/" render={() => <Scroll language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/> } />
    </BrowserRouter>
  );
}

export default App;
