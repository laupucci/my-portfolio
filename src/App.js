import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Background from "./components/background";
import Navbar from "./components/nav";
import Contact from "./components/contact";
import Tecnologies from "./components/tecnologies";
import Projects from "./components/projects";
import Scroll from "./Scroll";
require("dotenv").config();

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');
  return (
    <BrowserRouter>
      <Route path="/" component={Background} />
      <Route path="/" render={() => <Navbar language={language} setLanguage={setLanguage} /> } />
      <Route exact path="/" render={() => <Scroll language={language} setLanguage={setLanguage} /> } />
      <Route exact path="/tecnologias" render={() => <Tecnologies language={language} setLanguage={setLanguage} /> } />
      <Route exact path="/proyectos" render={() => <Projects language={language} setLanguage={setLanguage} /> } />
      <Route exact path="/contacto" render={() => <Contact language={language} setLanguage={setLanguage} /> } />
    </BrowserRouter>
  );
}

export default App;
