import styled from "styled-components";
import { colors } from "../../utils";
const { whitish } = colors;

export const TecContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .background {
    object-fit: cover;
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
  .logoS {
    width: 6.7vw;
    color: ${whitish};
  }
  .logoLightS {
    width: 6.7vw;
    color: ${whitish};
  }
  .express,
  .expressLight {
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logoE,
  .logoELight {
    width: 9vw;
    height: 7vh;
    color: ${whitish};
  }
  .logoTxt {
    color: ${whitish};
    text-align: center;
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
    object-fit: cover;
    height: 100%;
    width: 100%;
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

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    .title,
    .titleLight {
      font-size: 6vw;
      margin-bottom: 0;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .logo,
    .logoLight {
      width: 7vw;
      height: 7vh;
    }
    .logoS,
    .logoLightS {
      width: 10.5vw;
    }
    .express,
    .expressLight {
      height: 7vh;
    }
    .logoE {
      width: 17vw;
      height: 4vh;
    }
    .logoELight {
      width: 17vw;
    }
    .logoTxt,
    .logoTxtLight {
      font-size: 4.2vw;
      text-align: center;
    }
    .logoTxtE {
      font-size: 5vw;
    }
  }
  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;
    .cont {
      margin-top: 1%;
      justify-content: center;
    }
    .title,
    .titleLight {
      font-size: 10vw;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .logo,
    .logoLight {
      width: 7vw;
      height: 7vh;
    }
    .logoS,
    .logoLightS {
      width: 10.5vw;
    }
    .express,
    .expressLight {
      height: 7vh;
    }
    .logoE {
      width: 17vw;
      height: 4vh;
    }
    .logoELight {
      width: 17vw;
    }
    .logoTxt,
    .logoTxtLight {
      font-size: 4.2vw;
      text-align: center;
    }
    .logoTxtE {
      font-size: 5vw;
    }
    .footer{
      display: none
    }
  }
`;
