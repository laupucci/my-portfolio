import styled from "styled-components";
import { colors } from "../../utils";
const { whitish } = colors;

export const TecContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

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
  .title {
    color: ${whitish};
    font-size: 4vw;
    font-family: "Acme", sans-serif;
  }
  .cont {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90%;
    width: 100%;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .tec {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.52vw;
  }
  .logo {
    width: 7vw;
    height: 7vw;
    color: ${whitish};
  }
  .express {
    height: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logoE {
    width: 6em;
    color: ${whitish};
  }
  .logoTxt {
    color: ${whitish};
  }
  .logoTxtE {
    color: ${whitish};
    margin-top: 2em;
  }
  .logoLight {
    width: 7vw;
    height: 7vw;
    color: #202020;
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
    font-family: "Acme", sans-serif;
  }
  p {
    font-family: "Acme", sans-serif;
  }
  .titleCont {
    margin-top: 2%;
  }

  @media (max-width: 1400px) {
    min-height: 100vh;
    min-width: 100vw;
    }
  @media (max-width: 500px) {
    min-height: 100vh;
    min-width: 100vw;
    justify-content: center;
    align-items: center;
    .background {
    height: 100%;
    width: 100%;
    }
    .cont{
      justify-content: center
    }
    .title, .titleLight {
    font-size: 8vw;
  }
    .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  
  }
  .logo {
    width: 7vw;
    height: 7vh;
    color: ${whitish};
  }
  .express {
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logoE {
    width: 17vw;
    color: ${whitish};
  }
  .logoTxt {
   font-size: 4.2vw;
   text-align: center;

  }
  .logoTxtE {
    font-size: 5vw
  }
  .logoLight {
    width: 7vw;
    height: 7vh;
    color: #202020;
  }

    
    
    }
`;
