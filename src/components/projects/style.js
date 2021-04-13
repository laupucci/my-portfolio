import styled from "styled-components";

export const ProjectsContainer = styled.section`
  height: 100vh;
  width: 100vw;

  .background {
    object-fit: cover;
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.body};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .scrollCont {
    width: 90%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .container {
    display: flex;
    width: 80%;
    height: 68vh;
    border: none;
    margin: 1px;
    overflow: hidden;
    white-space: nowrap;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    width: 6.5vw;
    height: 68vh;
    .rightArrow {
      width: 6vw;
      height: 6vw;
      cursor: pointer;
    }
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    width: 6.5vw;
    height: 68vh;

    .leftArrow {
      width: 6vw;
      height: 6vw;
      cursor: pointer;
    }
  }

  .proyects {
    display: inline-block;
    min-width: 90%;
    height: 98%;
    background-color: ${({ theme }) => theme.body};
    border: 1px dotted ${({ theme }) => !theme.body};
    border-radius: 0 30px;
  }
  h2 {
    margin: 0;
    margin-top: 1%;
    font-family: "Acme", sans-serif;
  }
  h3 {
    font-family: "Acme", sans-serif;
    font-size: 2.5vw;
    margin: 1%;
  }
  p {
    font-family: "Overpass", sans-serif;
    font-size: 1.1vw;
    margin-top: 0;
    flex-wrap: nowrap;
    white-space: normal;
    margin: 0 1%;
    text-align: justify;
  }
  li {
    font-family: "Overpass", sans-serif;
    font-size: 1.1vw;
    margin-top: 0;
    flex-wrap: nowrap;
    white-space: normal;
  }
  .title {
    color: ${({ theme }) => theme.text};
    font-size: 4vw;
    max-width: 6em;
    justify-content: center;
    align-items: center;
  }
  .imgsIntegrar {
    width: 10vw;
    margin: 1vw;
    border: 3px solid ${({ theme }) => theme.imgs};
    border-radius: 17px;
  }
  .imgsDubsnip {
    width: 24vw;
    margin: 1em;
    //border: 5px solid ${({ theme }) => theme.imgs};
    border-radius: 10px;
  }
  .imgsPampaQuiz {
    width: 24vw;
    margin: 1em;
    //border: 5px solid ${({ theme }) => theme.imgs};
    border-radius: 10px;
  }
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imgs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .integrar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 96%;
    padding: 1%;
  }
  .integrarTxt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: ${({ theme }) => theme.text};
  }
  @media (max-width: 1024px) {
    .title{
      font-size: 6vw;
    }
    .integrar {
      padding: 2% 4%;
    }
    .integrarTxt {
      h3 {
        font-size: 4vw;
      }
      p {
        font-size: 2vw;
      }
    }
    .imgsIntegrar{
      width: 5vw
    }
    #proyect2 {
      h3 {
        font-size: 4vw;
      }
      p {
        font-size: 1.5vw;
      }
      li {
        font-size: 1.5vw;
      }
      .imgsDubsnip{
        width: 20vw
      }
    }
  }

  @media (max-width: 500px) {
    .background {
      justify-content: flex-end;
    }
    .scrollCont {
      height: 77%;
      margin-bottom: 7%;
    }
    .container {
      margin-top: 7.5%;
      width: 87vw;
      height: 95%;
      margin-bottom: 10%;
    }
    .proyects {
      min-width: 99%
    }
    .integrar {
      padding: 2% 4%;
    }
    .title {
      font-size: 8vw;
    }
    .right,
    .left {
      width: 7vw;
      .leftArrow,
      .rightArrow {
        width: 6.8vw;
        height: 6.8vw;
      }
    }
    .integrarTxt {
      h3 {
        font-size: 6vw;
      }
      p {
        font-size: 3.5vw;
      }
    }
    #proyect2 {
      h3 {
        font-size: 6vw;
      }
      p {
        font-size: 3vw;
      }
      li {
        font-size: 3vw;
      }
    }
    .imgsIntegrar {
      width: 11vw;
      height: 16vw;
    }
    .imgsPampaQuiz {
      width: 60vw;
    }
    .footer {
      display: none;
    }
  }
`;
