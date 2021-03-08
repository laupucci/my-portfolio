import React from "react";
import { ProjectsContainer } from "./style";
import Footer from "../footer";
import { languages } from "./languages";
import student from "../../media/img1.jpg";
import teacher from "../../media/img2.jpg";
import preceptor from "../../media/img3.jpg";
import dubsnip from "../../media/dubsnip.png";

export default function Projects({ language, theme }) {
  return (
    <ProjectsContainer id="proyectos">
        <div className="background">
          <div className="container">
            <h2 className="title">{languages[language]?.projects}</h2>
            <div className="proyects">
              <div className="integrar">
                <div className="integrarTxt">
                  <h3>IntegrAr</h3>
                  <p>{languages[language]?.integrAr}</p>
                </div>
                <div className="imgs">
                  <img className="imgsIntegrar" src={student} />
                  <img className="imgsIntegrar" src={teacher} />
                  <img className="imgsIntegrar" src={preceptor} />
                </div>
              </div>
            </div>
            <div className="proyects">
              <div className="integrar">
                <div className="integrarTxt">
                  <h3>DubsNip</h3>
                  <p>{languages[language]?.dubsnip}</p>
                </div>
                <div className="img">
                  <img className="imgsDubsnip" src={dubsnip} />
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <Footer
              theme={theme}
              language={language}
              text={languages[language]?.contact}
              to="contacto"
              className="footer"
            />
          </div>
        </div>
    </ProjectsContainer>
  );
}
