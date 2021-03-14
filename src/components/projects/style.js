import styled from "styled-components";


export const ProjectsContainer = styled.section`
  height: 100vh;
  width: 100vw;
  /* margin: 0 auto; */

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
  .container {
    height: 99vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1%;
  }
  .proyects {
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
    font-family: "Overpass", sans-serif;
    font-size: 1.1vw;
    margin-top: 0;
  }
  .title {
    color: ${({ theme }) => theme.text};
    font-size: 4vw;
    max-width: 6em;
    justify-content: center;
    align-items: center;
  }
  .imgsIntegrar {
    width: 6.2vw;
    margin: 1vw;
    border: 5px solid ${({ theme }) => theme.imgs};
    border-radius: 17px;
  }
  .imgsDubsnip {
    width: 24.5vw;
    margin: 1em;
    border: 5px solid ${({ theme }) => theme.imgs};
    border-radius: 17px;
  }

  .imgs {
    display: flex;
    flex-direction: row;
  }
  .integrar {
    display: flex;
    flex-direction: row;
    width: 90%;
  }
  .integrarTxt {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
    padding-right: 2.5%;
    width: 60vw;
  }

  @media (max-width: 1024px) {
    .background {
      justify-content: flex-end;
    }
    .container {
      width: 100vw;
      height: 84%;
      justify-content: flex-start;
    }
    .title {
      font-size: 6vw;
    }
    .integrar {
      flex-direction: column;
      width: 100vw;
    }
    .integrarTxt {
      width: 98vw;
      h3 {
        font-size: 3vw;
        margin: 1%;
      }
      p {
        font-size: 1.5vw;
        text-align: justify;
        padding: 0 2%;
      }
    }
    .imgsIntegrar {
      width: 13vw;
      margin: 1vw;
      border: 2px solid #151515;
      border-radius: 7px;
      margin-right: 2%;
    }
    .imgsDubsnip {
      width: 33vw;
      margin: 1em;
      border: 2px solid #151515;
      border-radius: 17px;
      padding: 0;
      margin: 0;
    }
    .imgs,
    .img {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 500px) {
    .background {
      justify-content: center;
      align-items: center;
    }
    .container {
      margin-top: 7.5%;
      width: 87vw;
      height: 90%;
      justify-content: flex-start;
      align-items: center;
    }
    .title {
      font-size: 8vw;
    }
    .integrar {
      flex-direction: column;
      width: 85%;
    }
    .integrarTxt {
      width: 100%;
      h3 {
        font-size: 4vw;
        margin: 1%;
      }
      p {
        font-size: 3.5vw;
        text-align: justify;
        padding: 0 2%;
      }
    }
    .imgsIntegrar {
      width: 13.6vw;
      height: 15vh;
      margin: 1vw;
      border: 2px solid #151515;
      border-radius: 7px;
      margin-right: 2%;
    }
    .imgsDubsnip {
      width: 33vw;
      margin: 1em;
      height: 9vh;
      border: 2px solid #151515;
      border-radius: 17px;
      padding: 0;
      margin: 0;
    }
    .imgs,
    .img {
      display: flex;
      justify-content: center;
    }
    .footer{
      display: none
    }
  }
`;
