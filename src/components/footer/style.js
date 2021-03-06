import styled from "styled-components";
import { colors } from "../../utils/index";
const { whitish } = colors;

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
  .pages {
    width: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .git,
  .linkedin,
  .cv {
    color: #e8e8e8;
    width: 5vw;
    height: 5vh;
    cursor: pointer;
    &:hover {
      transform: scale(1.5);
      margin-top: -0.4rem;
    }
  }
  .cvDiv {
    color: ${whitish};
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 5vw;
    height: 5vh;
    cursor: pointer;
    &:hover {
      transform: scale(1.5);
      margin-top: -0.4rem;
    }
    .cv,
    p {
      font-family: "Acme", sans-serif;
      margin: 0;
    }
  }
  .cvDivLight {
    color: #272727;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 5vw;
    height: 5vh;
    cursor: pointer;
    &:hover {
      transform: scale(1.5);
      margin-top: -0.4rem;
    }
    .cvLight,
    p {
      font-family: "Acme", sans-serif;
      margin: 0;
    }
  }
  .gitLight,
  .linkedinLight,
  .cvLight {
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
    width: 75%;
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
      color: #e8e8e8;
      transition: 0.3s ease-in-out;
    }
    .arrow {
      margin-top: -0.2rem;
      width: 1.7vw;
      height: 1.7vw;
      color: #e8e8e8;
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

  @media screen and (max-width: 1024px) {
    .pages {
      width: 35%;
    }
    .cta {
      width: 35%;
      .cta_txt,
      .cta_txtLight {
        font-size: 2.2vw;
      }
      .arrow,
      .arrowLight {
        width: 6vw;
        height: 6.7vw;
      }
    }
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    .pages {
      width: 45%;
    }
    .git,
    .linkedin,
    .cv,
    .gitLight,
    .linkedinLight,
    .cvLight {
      width: 7vw;
      height: 7vh;
    }
    .cta {
      width: 45%;
      .cta_txt,
      .cta_txtLight {
        font-size: 3vw;
      }
      .arrow,
      .arrowLight {
        width: 8vw;
        height: 8.7vw;
      }
    }
  }
`;
