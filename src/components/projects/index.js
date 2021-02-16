import React from "react";
import { ProjectsContainer } from "./style";
import { Cta } from "../../utils";
import { languages } from "./languages";
//
export default function Projects({ language, theme }) {
  return (
    <ProjectsContainer id="proyectos">
      {theme === "dark" ? (
        <div className="background">
              <h2 className="title">{languages[language]?.projects}</h2>
          <Cta text={languages[language]?.contact} to="contacto" theme={theme} />
        </div>
      ) : (
        <div className="backgroundLight">
          <h2 className="titleLight">{languages[language]?.projects}</h2>
          <Cta text={languages[language]?.contact} to="contacto" theme={theme}/>
        </div>
      )}
    </ProjectsContainer>
  );
}
