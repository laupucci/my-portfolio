import React from "react";
import { HomeContainer } from "./style";
import Footer from "../footer/index";
import { languages } from "./languages";
import Typed from "react-typed";

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
              <Typed
                className="description"
                strings={[languages[language]?.description]}
                typeSpeed={20}
                showCursor={false}
              />
              <span id="typed"></span>
            </div>
          </div>
          <div className="footer">
            <Footer
              theme={theme}
              language={language}
              text={languages[language]?.tecnologies}
              to="tecnologias"
              className="footer"
            />
          </div>
        </div>
      ) : (
        <div className="backgroundLigth">
          <div className="container">
            <div className="me_containerLight">
              <p className="subtitleLigth">{languages[language]?.hello}</p>
              <h2 className="titleLigth">{languages[language]?.me}</h2>
            </div>
            <div className="desc_containerLight">
              <h2 className="descriptionTitleLigth">
                {languages[language]?.full}
              </h2>

              <Typed
                className="descriptionLigth"
                strings={[languages[language]?.description]}
                typeSpeed={20}
              />
            </div>
          </div>
          <div className="footer">
            <Footer
              theme={theme}
              language={language}
              text={languages[language]?.tecnologies}
              to="tecnologias"
              className="footer"
            />
          </div>
        </div>
      )}
    </HomeContainer>
  );
}
