import React from "react";
import { ProjectsContainer } from "./style";
import { Cta } from "../../utils";
import {languages} from "./languages"
//
export default function Projects({ language }) {
  return (
    <ProjectsContainer id="proyectos">
      <div className="background">
      <div className="container">
        <div className="hero_txt">
          <h2 className="title">{languages[language]?.projects}</h2>
        </div>
        <div className="logo_container">
        </div>
      </div>
      <Cta text={languages[language]?.contact} to="contacto" />
      </div>
    </ProjectsContainer>
  );
}
