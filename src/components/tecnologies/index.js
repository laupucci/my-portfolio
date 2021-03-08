import React from "react";
import { TecContainer } from "./style";
import Footer from "../footer";
import { languages } from "./languages";
import {
  SiApollographql,
  SiReact,
  SiPostgresql,
  SiNodeDotJs,
  SiJavascript,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiExpo,
} from "react-icons/si";
import express from "../../media/expressjs.svg";
import sequelize from "../../media/sequelize-icon.svg";
import sequelizeW from "../../media/sequelize-whitish.svg";
import expressW from "../../media/expressjs-whitish.svg";

export default function Tecnologies({ language, theme }) {
  return (
    <TecContainer id="tecnologias">
        <div className="background">
          <div className="cont">
            <div className="titleCont">
              <h2 className="title">{languages[language]?.tecnologies}</h2>
            </div>
            <div className="container">
              <div className="tec">
                <SiReact className="logo" />
                <p className="logoTxt">React | React-Native</p>
              </div>
              <div className="tec">
                <SiRedux className="logo" />
                <p className="logoTxt">Redux</p>
              </div>
              <div className="tec">
                <SiJavascript className="logo" />
                <p className="logoTxt">Javascript</p>
              </div>
              <div className="tec">
                <SiNodeDotJs className="logo" />
                <p className="logoTxt">Node</p>
              </div>
              <div className="tec">
                <SiPostgresql className="logo" />
                <p className="logoTxt">PostgreSQL</p>
              </div>
              <div className="tec">
                <SiMongodb className="logo" />
                <p className="logoTxt">MongoDB</p>
              </div>
              <div className="tec">
                <SiGraphql className="logo" />
                <p className="logoTxt">GraphQL</p>
              </div>
              <div className="tec">
                <SiApollographql className="logo" />
                <p className="logoTxt">Apollo</p>
              </div>
              <div className="tec">
                <SiExpo className="logo" />
                <p className="logoTxt">Expo</p>
              </div>
              <div className="tec">
                <div className="express">
                  <img src={theme === 'dark' ? expressW : express} className="logoE" />
                </div>
                <p className="logoTxt">Express</p>
              </div>
              <div className="tec">
                <img src={theme === 'dark' ? sequelizeW : sequelize} className="logoS" />
                <p className="logoTxt">Sequelize</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <Footer
              theme={theme}
              language={language}
              text={languages[language]?.projects}
              to="proyectos"
              className="footer"
            />
          </div>
        </div>
    </TecContainer>
  );
}
