import styled from "styled-components";
// import { colors } from "./index";
// const { whitish } = colors;

export const FooterContainer = styled.section`
    position: relative;
    bottom: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    padding-bottom: 1.2%;
.pages{
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.git{
  color: #E8E8E8;
  width: 5vw;
  height: 5vh;
  cursor: pointer;
    &:hover {
        transform: scale(1.5);
        margin-top: -0.4rem;
    }
}
.linkedin{
  color: #E8E8E8;
  width: 5vw;
  height: 5vh;
  cursor: pointer;
    &:hover {
        transform: scale(1.5);
        margin-top: -0.4rem;
    }
}
.gitLight{
  color: #272727;
  width: 5vw;
  height: 5vh;
  cursor: pointer;
    &:hover {
        transform: scale(1.5);
        margin-top: -0.4rem;
    }
}
.linkedinLight{
  color: #272727;
  width: 5vw;
  height: 5vh;
  cursor: pointer;
    &:hover {
        transform: scale(1.5);
        margin-top: -0.4rem;
    }
}
 .cta {
   // position: relative;
    bottom: 0;
    width: 80%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      .arrow {
        transform: scale(1.5);
        margin-top: -0.4rem;
      }
    }

    .cta_txt {
      font-size: 1vw;
      font-family: "Acme", sans-serif;
      color: #E8E8E8;
      transition: 0.3s ease-in-out;
    }
    .arrow {
      margin-top: -0.2rem;
      width: 1.7vw;
      height: 1.7vw;
      color: #E8E8E8;
      transition: 0.3s ease-in-out;
    }
    .cta_txtLight {
      font-size: 1vw;
      font-family: "Acme", sans-serif;
      color: #272727;
      transition: 0.3s ease-in-out;
    }
    .arrowLight {
      margin-top: -0.2rem;
      width: 1.7vw;
      height: 1.7vw;
      transition: 0.3s ease-in-out;
      color: #272727;
    }
  } 
`