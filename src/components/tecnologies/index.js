import React from "react";
import { TecContainer } from "./style";
import { Cta } from "../../utils";
import {languages} from "./languages"

export default function Tecnologies({ language }) {
  return (
    <TecContainer id="tecnologias">
      <div className="background">
      <div className="container">
        <div className="hero_txt">
          <h2 className="title">{languages[language]?.tecnologies}</h2>
        </div>
        <div className="logo_container">
        </div>
      </div>
      <Cta text={languages[language]?.projects} to="proyectos" />
      </div>
    </TecContainer>
  );
}
