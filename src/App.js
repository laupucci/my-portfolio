import React, { useState, useEffect } from "react";
import Background from "./components/background";
import Navbar from "./components/nav";
import Home from "./components/home";
import Tecnologies from "./components/tecnologies";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme_style';
import { GlobalStyles } from './styles/global_style';
import "./App.css";
require("dotenv").config();

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
//   const [loading, setLoading] = useState(true)
//    useEffect(() => {
//     setTimeout(function(){     setLoading(false) }, 3500);
//  }, [])

//  if (loading){
//    return(
//     <img src={load} className="loader"/>
//    )
//  }
return (
   <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
  <>
        <GlobalStyles />
  <Background theme={theme} setTheme={setTheme} />
  <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
    <div>
    <Home language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
    <Tecnologies language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
    <Projects language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}/>
    <Contact language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme}
    />
    </div>
  </>
  </ThemeProvider>
  )
}

export default App;
