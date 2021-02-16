import React from "react";
import { Link } from "react-scroll";
import { BiDownArrow } from "react-icons/bi";

export const colors = {
  black: "#1C1816",
  primaryColor: "#A3BD31",
  primaryColorDarker: "#7FBD31",
  primaryColorDarker2: "#58871e",
  secondaryDark: "#A14C4B",
  darkColor: "#434241",
  darkBrown: "#272727",
  whitish: "#E8E8E8",
};

export const Cta = ({ text, to, theme }) => {
  console.log(theme, 'cta')
  return (
    <Link to={to} spy={true} smooth={true} duration={500} className="cta">
      {theme === "dark" ? (
        <span className="cta_txt">{text}</span>
      ) : (
        <span className="cta_txtLight">{text}</span>
      )}
      {theme === "dark" ? (
        <BiDownArrow className="arrow"/>
      ) : (
        <BiDownArrow className="arrowLight"/>
      )}
    </Link>
  );
};
