import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FooterContainer } from "./style";
import { CgNotes } from "react-icons/cg";
import pdfEnglish from "../../media/English.pdf";
import pdfSpanish from "../../media/Spanish.pdf";

export default function FooterMedia({ theme, language }) {
  console.log(language, theme);
  return (
    <FooterContainer>
      <div className="pages">
        <a href="http://www.github.com/laupucci">
            <SiGithub className="git" />
        </a>
        <a href="https://www.linkedin.com/in/mar%C3%ADa-laura-puccinelli-859935178/">
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
    </FooterContainer>
  );
}
