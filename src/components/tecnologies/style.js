import styled from "styled-components";

export const TecContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  .background {
    object-fit: cover;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.body};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    color: ${({ theme }) => theme.text};
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
    color: ${({ theme }) => theme.text};
  }
  .logoS {
    width: 6.7vw;
    color: ${({ theme }) => theme.text};
  }
  .express {
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .logoE {
    width: 9vw;
    height: 7vh;
    color: ${({ theme }) => theme.text};
  }
  .logoTxt {
    color: ${({ theme }) => theme.text};
    text-align: center;
  }
  .logoTxtE {
    color: ${({ theme }) => theme.text};
    margin-top: 2em;
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
    .title {
      font-size: 5vw;
      margin-bottom: 0;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .logo {
      width: 4vw;
      height: 4vh;
    }
    .logoS {
      width: 4.5vw;
    }
    .express {
      height: 4vh;
    }
    .logoE {
      width: 9vw;
      height: 2vh;
    }
    .logoTxt {
      font-size: 3.5vh;
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
    .title {
      font-size: 10vw;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .logo {
      width: 7vw;
      height: 7vh;
    }
    .logoS {
      width: 10.5vw;
    }
    .express {
      height: 7vh;
    }
    .logoE {
      width: 17vw;
      height: 4vh;
    }
    .logoTxt {
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
