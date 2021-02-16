import React from "react";
import { TecContainer } from "./style";
import { Cta } from "../../utils";
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
import express from "../../media/expressjs.svg"
import sequelize from "../../media/sequelize-icon.svg"
import sequelizeW from "../../media/sequelize-whitish.svg"
import expressW from "../../media/expressjs-whitish.svg"

export default function Tecnologies({ language, theme }) {
  return (
    <TecContainer id="tecnologias">
      {theme === "dark" ? (
        <div className="background">
          <div className="cont">
          <div>
            <h2 className="title">{languages[language]?.tecnologies}</h2>
          </div>
          <div className="container">
            <div className="tec">
              <SiReact className="logo"/>
              <p className="logoTxt">React | React-Native</p>
            </div>
            <div className="tec">
              <SiRedux className="logo"/>
              <p className="logoTxt">Redux</p>
            </div>
            <div className="tec">
              <SiJavascript className="logo"/>
              <p className="logoTxt">Javascript</p>
            </div>
            <div className="tec">
              <SiNodeDotJs className="logo"/>
              <p className="logoTxt">Node</p>
            </div>
            <div className="tec">
              <SiPostgresql className="logo"/>
              <p className="logoTxt">PostgreSqñ</p>
            </div>
            <div className="tec">
              <SiMongodb className="logo"/>
              <p className="logoTxt">MongoDB</p>
            </div>
            <div className="tec">
              <SiGraphql className="logo"/>
              <p className="logoTxt">GraphQL</p>
            </div>
            <div className="tec">
              <SiApollographql className="logo"/>
              <p className="logoTxt">Apollo</p>
            </div>
            <div className="tec">
              <SiExpo className="logo"/>
              <p className="logoTxt">Expo</p>
            </div>
            <div className="tec">
              <div className="express">
              <img src={expressW} className="logoE"/>
              </div>
              <p className="logoTxt">Exress</p>
            </div>
            <div className="tec">
              <img src={sequelizeW} className="logo"/>
              <p className="logoTxt">Sequelize</p>
            </div>
          </div>
          <Cta
            text={languages[language]?.projects}
            to="proyectos"
            theme={theme}
          />
          </div>
        </div>
      ) : (
        <div className="backgroundLight">
         <div className="cont">
          <div>
            <h2 className="titleLight">{languages[language]?.tecnologies}</h2>
          </div>
          <div className="container">
            <div className="tec">
              <SiReact className="logoLight"/>
              <p>React | React-Native</p>
            </div>
            <div className="tec">
              <SiRedux className="logoLight"/>
              <p>Redux</p>
            </div>
            <div className="tec">
              <SiJavascript className="logoLight"/>
              <p>Javascript</p>
            </div>
            <div className="tec">
              <SiNodeDotJs className="logoLight"/>
              <p>Node</p>
            </div>
            <div className="tec">
              <SiPostgresql className="logoLight"/>
              <p>PostgreSqñ</p>
            </div>
            <div className="tec">
              <SiMongodb className="logoLight"/>
              <p>MongoDB</p>
            </div>
            <div className="tec">
              <SiGraphql className="logoLight"/>
              <p>GraphQL</p>
            </div>
            <div className="tec">
              <SiApollographql className="logoLight"/>
              <p>Apollo</p>
            </div>
            <div className="tec">
              <SiExpo className="logoLight"/>
              <p>Expo</p>
            </div>
            <div className="tec">
              <img src={express} className="logoLight"/>
              <p>Exress</p>
            </div>
            <div className="tec">
              <img src={sequelize} className="logoLight"/>
              <p>Sequelize</p>
            </div>
          </div>
          <Cta
            text={languages[language]?.projects}
            to="proyectos"
            theme={theme}
          />
          </div>
        </div>
      )}
    </TecContainer>
  );
}
