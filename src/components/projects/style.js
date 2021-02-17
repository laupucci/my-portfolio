import styled from "styled-components";
import { colors } from "../../utils";
const { whitish } = colors;

export const ProjectsContainer = styled.section`
 height: 100vh;
  width: 100vw;
  margin: 0 auto;

.background {
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .container{
    justify-content: center;
    align-items: center; 
    padding: 2.5em
  }
  h2{
    margin: 0;
    margin-top: 0.8em
  }
  .title {
    color: ${whitish};
    font-size: 250%;
    max-width: 6em;
    justify-content: center;
    align-items: center
  }
  .imgsIntegrar{
    width: 5.5em;
    margin: 1em;
    border: 5px solid  #151515;
    border-radius: 17px;
  }
  .imgsDubsnip{
    width: 21.5em;
    margin: 1em;
    border: 5px solid  #151515;
    border-radius: 17px;
  }
  .imgs{
    display: flex;
    flex-direction: row; 
  }
  .integrar{
    display: flex;
    flex-direction: row; 
  }
  .integrarTxt{
    display: flex;
    flex-direction: column; 
    color: ${whitish};
  }
  .integrarLight{
    display: flex;
    flex-direction: row; 
    color: #272727
  }
  .integrarTxtLight{
    display: flex;
    flex-direction: column; 
    color: #202020;
  }
  .cta {
   // position: absolute;
   color: #3b3228;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    padding: 0.5rem 0.5rem 0 0.5rem;
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
      font-size: 1rem;
      font-family: "Sanchez";
      color: #e4e4e4;
      transition: 0.3s ease-in-out;
    }
    .arrow {
      margin-top: -0.2rem;
      width: 1.7rem;
      height: 1.7rem;
      transition: 0.3s ease-in-out;
      color: #e4e4e4;
    }
  }

  .backgroundLight {
    height: 100%;
    background: rgba(255, 255, 255, 0.75);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .titleLight {
    color: #272727;
    font-size: 250%;
  }
`