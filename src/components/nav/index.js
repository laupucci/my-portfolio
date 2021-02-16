import React, { useEffect, useState } from "react";
import { BiWorld } from 'react-icons/bi'
import { languages } from './languages'
import { Link } from "react-router-dom";
import { Container, LanguageCont } from "./style";
import { Link as ScrollLink } from "react-scroll";
//{ language, setLanguage }
const Navbar = ({ language, setLanguage }) => {
  const [active, setActive] = useState(false);
  
  const handleLanguage = (ev) => {
		if (ev.target.id) {
			setLanguage(ev.target.id);
			localStorage.setItem('language', ev.target.id)
		}
	}

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll) setActive(true);
    else setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container active={active}>
        <ScrollLink to="home" smooth={true} duration={500}>
         <p className="logo">Laura Puccinelli | Full Stack Developer</p>
        </ScrollLink> :

      <nav className="menu">
    
        <ScrollLink to="tecnologias" smooth={true} duration={600}>
          <p className="p2">{languages[language]?.tecnologies}</p>
        </ScrollLink> 
      
        <ScrollLink to="proyectos" smooth={true} duration={600}>
          <p className="p2">{languages[language]?.projects}</p>
        </ScrollLink>
       
        <ScrollLink to="contacto" smooth={true} duration={600}>
          <p className="p2">{languages[language]?.contact}</p>
        </ScrollLink>
        <LanguageCont>
					<BiWorld className="icon"/>
					<ul className="list" onClick={handleLanguage}>
					<p className="p1">{languages[language]?.language}</p>
						<li>
							<button id="en">
								<p className="en">{languages[language]?.language_en}</p>
							</button>
						</li>
						<li>
							<button id="es" >
              <p className="en">
								{languages[language]?.language_es}
                </p>
							</button>
						</li>
					</ul>
				</LanguageCont>
      </nav>
      <ScrollLink to="home" smooth={true} duration={500} className="top">
        <span>^</span>
      </ScrollLink>
    </Container>
  );
};

export default Navbar;
