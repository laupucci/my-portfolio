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
    justify-content: space-between;
    align-items: center;
    height: 94%;
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
    width: 6em;
    height: 6em;
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
    width: 6em;
    height: 6em;
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
`;
