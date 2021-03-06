import styled from "styled-components";
import { colors } from "../../utils";
const { whitish } = colors;

export const ProjectsContainer = styled.section`
  height: 100vh;
  width: 100vw;
  /* margin: 0 auto; */

  .background {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .container {
    height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
  .proyects{
    display: flex;
    justify-content: center;
  }
  h2 {
    margin: 0;
    margin-top: 1%;
    font-family: "Acme", sans-serif;
  }
  h3 {
    font-family: "Acme", sans-serif;
    font-size: 1.7vw;
  }
  p {
    font-family: "Acme", sans-serif;
    font-size: 1.1vw;
    margin-top: 0;
  }
  .title {
    color: ${whitish};
    font-size: 4vw;
    max-width: 6em;
    justify-content: center;
    align-items: center;
  }
  .imgsIntegrar {
    width: 7vw;
    margin: 1vw;
    border: 5px solid #585858;
    border-radius: 17px;
  }
  .imgsDubsnip {
    width: 26vw;
    margin: 1em;
    border: 5px solid #585858;
    border-radius: 17px;
  }
  .imgsIntegrarLight {
    width: 7vw;
    margin: 1vw;
    border: 5px solid #151515;
    border-radius: 17px;
  }
  .imgsDubsnipLight {
    width: 26vw;
    margin: 1em;
    border: 5px solid #151515;
    border-radius: 17px;
  }
  .imgs {
    display: flex;
    flex-direction: row;
  }
  .integrar {
    display: flex;
    flex-direction: row;
    width: 90%
  }
  .integrarTxt {
    display: flex;
    flex-direction: column;
    color: ${whitish};
    padding-right: 2.5%;
    
  }
  .integrarLight {
    display: flex;
    flex-direction: row;
    width: 90%;
    color: #272727;
  }
  .integrarTxtLight {
    display: flex;
    flex-direction: column;
    color: #202020;
    padding-right: 2.5%;
  }
  
  .backgroundLight {
    height: 100%;
    background: rgba(255, 255, 255, 0.75);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .titleLight {
    color: #272727;
    font-size: 4vw;
  }

  @media (max-width: 1400px) {
    min-height: 100vh;
    min-width: 100vw;
      .background {
    height: 100%;
    width: 100%;
    }
    }
  @media (max-width: 500px) {
    min-height: 100vh;
    min-width: 100vw;
    .background {
    height: 100%;
    width: 100%;
    }}
`;
