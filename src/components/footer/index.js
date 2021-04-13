import React from "react";
import { Link } from "react-scroll";
import { MdExpandMore } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FooterContainer } from "./style";
import { CgNotes } from "react-icons/cg";
import pdfEnglish from "../../media/English.pdf";
import pdfSpanish from "../../media/Spanish.pdf";

export default function Footer({ text, theme, to, language }) {
  return (
    <FooterContainer>
      <div className="pages">
        <a href="http://www.github.com/laupucci">
            <SiGithub className="git" />
        </a>
        <a href="https://www.linkedin.com/in/m-laura-puccinelli/">
         
            <SiLinkedin className="linkedin" />
        </a>
          <div className="cvDiv">
            {language === "en" ? (
              <a href={pdfEnglish} target="_blank">
                <CgNotes className="cv" />
              </a>
            ) : (
              <a href={pdfSpanish} target="_blank">
                <CgNotes className="cv" />
              </a>
            )}
            <p>CV</p>
          </div>
      </div>
      <Link to={to} spy={true} smooth={true} duration={500} className="cta">
          <span className="cta_txt">{text}</span>
          <MdExpandMore className="arrow" />
      </Link>
    </FooterContainer>
  );
}
