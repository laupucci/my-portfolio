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
  console.log(language, theme);
  return (
    <FooterContainer>
      <div className="pages">
        <a href="http://www.github.com/laupucci">
          {theme === "dark" ? (
            <SiGithub className="git" />
          ) : (
            <SiGithub className="gitLight" />
          )}
        </a>
        <a href="https://www.linkedin.com/in/mar%C3%ADa-laura-puccinelli-859935178/">
          {theme === "dark" ? (
            <SiLinkedin className="linkedin" />
          ) : (
            <SiLinkedin className="linkedinLight" />
          )}
        </a>
        {theme === "dark" ? (
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
        ) : (
          <div className="cvDivLight">
            {language === "en" ? (
              <a href={pdfEnglish} target="_blank">
                <CgNotes className="cvLight" />
              </a>
            ) : (
              <a href={pdfSpanish} target="_blank">
                <CgNotes className="cvLight" />
              </a>
            )}
            <p>CV</p>
          </div>
        )}
      </div>
      <Link to={to} spy={true} smooth={true} duration={500} className="cta">
        {theme === "dark" ? (
          <span className="cta_txt">{text}</span>
        ) : (
          <span className="cta_txtLight">{text}</span>
        )}
        {theme === "dark" ? (
          <MdExpandMore className="arrow" />
        ) : (
          <MdExpandMore className="arrowLight" />
        )}
      </Link>
    </FooterContainer>
  );
}
