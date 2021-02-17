import React from "react";
import { ProjectsContainer } from "./style";
import { Cta } from "../../utils";
import { languages } from "./languages";
import student from "../../media/img1.jpg";
import teacher from "../../media/img2.jpg";
import preceptor from "../../media/img3.jpg";
import dubsnip from "../../media/dubsnip.png";

export default function Projects({ language, theme }) {
  return (
    <ProjectsContainer id="proyectos">
      {theme === "dark" ? (
        <div className="background">
          <div className="container">
            <h2 className="title">{languages[language]?.projects}</h2>
            <div>
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
            <div>
              <div className="integrar">
                <div className="integrarTxt">
                  <h3>DubsNip</h3>
                  <p>{languages[language]?.dubsnip}</p>
                </div>
                <div>
                  <img className="imgsDubsnip" src={dubsnip} />
                </div>
              </div>
            </div>
            <Cta
              text={languages[language]?.contact}
              to="contacto"
              theme={theme}
            />
          </div>
        </div>
      ) : (
        <div className="backgroundLight">
          <div className="container">
            <h2 className="titleLight">{languages[language]?.projects}</h2>
            <div>
              <div className="integrarLight">
                <div className="integrarTxtLight">
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
            <div>
              <div className="integrarLight">
                <div className="integrarTxtLight">
                  <h3>DubsNip</h3>
                  <p>{languages[language]?.dubsnip}</p>
                </div>
                <div>
                  <img className="imgsDubsnip" src={dubsnip} />
                </div>
              </div>
            </div>
            <Cta
              text={languages[language]?.contact}
              to="contacto"
              theme={theme}
            />
          </div>
        </div>
      )}
    </ProjectsContainer>
  );
}
