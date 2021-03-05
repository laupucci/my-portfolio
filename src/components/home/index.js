import React, { useEffect } from "react";
//import logo from "../../media/logo.svg";
import { HomeContainer } from "./style";
import Footer from "../footer/index";
import { languages } from "./languages";

export default function Home({ language, theme }) {
  return (
    <HomeContainer id="home">
    {theme === "dark" ? (
      <div className="background">
          <div className="container">
            <div className="me_container">
              <p className="subtitle">{languages[language]?.hello}</p>
              <h2 className="title">{languages[language]?.me}</h2>
            </div>
            <div className="desc_container">
              <h2 className="descriptionTitle">{languages[language]?.full}</h2>
              <p className="description">{languages[language]?.description}</p>
            </div>
          </div>
            <Footer theme={theme} text={languages[language]?.tecnologies} to='tecnologias'/>
        </div>
      ) : (
        <div className="backgroundLigth">
          <div className="container">
            <div className="me_containerLight">
              <p className="subtitleLigth">{languages[language]?.hello}</p>
              <h2 className="titleLigth">{languages[language]?.me}</h2>
            </div>
            <div className="desc_containerLight">
              <h2 className="descriptionTitleLigth">{languages[language]?.full}</h2>
              <p className="descriptionLigth">{languages[language]?.description}</p>
            </div>
          </div>
            <Footer theme={theme} text={languages[language]?.tecnologies} to='tecnologias'/>
        </div>
      )}
    </HomeContainer>
  );
}
