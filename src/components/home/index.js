import React from "react";
//import logo from "../../media/logo.svg";
import { HomeContainer } from "./style";
import { Cta } from "../../utils";
import { languages } from "./languages";

export default function Home({ language, theme }) {
  console.log('home', theme)
  return (
    <HomeContainer id="home">
      {theme === "dark" ? (
        <div className="background">
          <div className="container">
            <div className="hero_txt">
              <p className="subtitle">{languages[language]?.hello}</p>
              <h2 className="title">{languages[language]?.me}</h2>
            </div>
            <div className="logo_container">
              <h2 className="descriptionTitle">{languages[language]?.full}</h2>
              <p className="description">{languages[language]?.description}</p>
            </div>
          </div>
          <Cta text={languages[language]?.tecnologies} to="tecnologias" theme={theme}/>
        </div>
      ) : (
        <div className="backgroundLigth">
          <div className="container">
            <div className="hero_txtLight">
              <p className="subtitleLigth">{languages[language]?.hello}</p>
              <h2 className="titleLigth">{languages[language]?.me}</h2>
            </div>
            <div className="logo_containerLight">
              <h2 className="descriptionTitleLigth">{languages[language]?.full}</h2>
              <p className="descriptionLigth">{languages[language]?.description}</p>
            </div>
          </div>
          <Cta className="textLigth" text={languages[language]?.tecnologies} to="tecnologias" theme={theme}/>
        </div>
      )}
    </HomeContainer>
  );
}
