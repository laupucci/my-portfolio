import React from "react";
//import logo from "../../media/logo.svg";
import { HomeContainer } from "./style";
import { Cta } from "../../utils";
import { languages } from "./languages"

export default function Home({language, setLanguage}) {

  return (
    <HomeContainer id="home">
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
      <Cta text={languages[language]?.tecnologies} to="tecnologias" />
      </div>
    </HomeContainer>
  );
}
