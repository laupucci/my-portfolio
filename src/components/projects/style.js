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
 height: 85vh;
    justify-content: center;
    align-items: center; 
    /* margin-top: 2%; */
    padding: 0 3vw 0 3vw;
  }
  h2{
    margin: 0;
    margin-top: 6vh;
    font-family: 'Acme', sans-serif;
  }
  h3{
    font-family: 'Acme', sans-serif;
    font-size: 1.7vw;
  }
  p{
    font-family: 'Architects Daughter', sans-serif;
    font-size: 1.37vw;
    margin-top: 0;
  }
  .title {
    color: ${whitish};
    font-size: 4vw;
    max-width: 6em;
    justify-content: center;
    align-items: center;
  }
  .imgsIntegrar{
    width: 7vw;
    margin: 1vw;
    border: 5px solid  #585858;
    border-radius: 17px;
  }
  .imgsDubsnip{
    width: 26vw;
    margin: 1em;
    border: 5px solid  #585858;
    border-radius: 17px;
  }
  .imgsIntegrarLight{
    width: 7vw;
    margin: 1vw;
    border: 5px solid  #151515;
    border-radius: 17px;
  }
  .imgsDubsnipLight{
    width: 26vw;
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
    padding-right: 2.5%;
  }
  .integrarLight{
    display: flex;
    flex-direction: row; 
    color: #272727;
    
  }
  .integrarTxtLight{
    display: flex;
    flex-direction: column; 
    color: #202020;
    padding-right: 2.5%;
  }
  .cta {
   margin-bottom: 0;
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
      font-size: 1vw;
      font-family: 'Acme', sans-serif;
      color: #e4e4e4;
      transition: 0.3s ease-in-out;
    }
    .cta_txtLight {
    font-family: 'Acme', sans-serif;
    font-size: 1vw;
      transition: 0.3s ease-in-out;
    }

    .arrow {
      margin-top: -0.2rem;
      width: 1.7vw;
      height: 1.7vw;
      transition: 0.3s ease-in-out;
      color: #e4e4e4;
    }
    .arrowLight {
    margin-top: -0.2rem;
    width: 1.7vw;
    height: 1.7vw;
    transition: 0.3s ease-in-out;
    color: #272727;
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
    font-size: 4vw;
  }
`