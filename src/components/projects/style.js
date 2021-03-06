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
   justify-content: space-between;
    align-items: center;
  }
  .containerHide{
    /* overflow-x: hidden;
    white-space: nowrap; */
    position: relative;
    margin-left: 4%;
    width: 100vw;
  }

  .scrollCont {
    /* width: 90%; */
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:220%;
    z-index: 1;
  }
  .scrollContMedia{
    display: none
  }
  .container {
    display: flex;
    width: 60rem;
    height: 68vh;
    border: none;
    margin: 1px;
    //overflow: hidden;
    //white-space: nowrap;
  
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
    border: 1px solid ${({ theme }) => !theme.body};
    border-radius: 0 30px;
    margin-right:0.5%
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
    font-size: 1em;
    margin-top: 0;
    flex-wrap: nowrap;
    white-space: normal;
    margin: 0 1%;
    text-align: justify;
  }
  .pDubsnip{
    font-size: 0.8em;
  }
  li {
    font-family: "Overpass", sans-serif;
    font-size: 0.8em;
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
    margin-top: 4%
  }

  .imgs {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* overflow: hidden;
    white-space: nowrap; */
    width: 33vw;
    height: 19vw;
    text-align: center;
  }
  .imgsIntegrar {
    width: 10vw;
    height: 15vw;
    margin: 1vw;
    border: 3px solid ${({ theme }) => theme.imgs};
    border-radius: 17px;
    &:hover {
      transition: 0.5s;
      transform: scale(1.4);
    }
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24em;
    /* overflow: hidden;
    white-space: nowrap; */
    text-align: center;
    border-radius: 10px;
  }

  .imgsDubsnip {
    width: 20em;
    margin: 1em;
    //border: 5px solid ${({ theme }) => theme.imgs};
    border-radius: 10px;
    &:hover {
      transition: 0.5s;
      transform: scale(1.2);
    }
  }
  .imgsPampaQuiz {
    width: 24em;
    margin: 1em;
    //border: 5px solid ${({ theme }) => theme.imgs};
    border-radius: 10px;
    &:hover {
      transition: 0.5s;
      transform: scale(1.2);
    }
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
    .title {
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
    .imgsIntegrar {
      width: 5vw;
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
      .imgsDubsnip {
        width: 20vw;
      }
    }
  }

  @media (max-width: 500px) {

    .scrollContMedia{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 0;
    }
    .containerMedia {
    display: flex;
    width: 75vw;
    height: 77vh;
    border: none;
    overflow: hidden;
    white-space: nowrap;
  
  }
    .background {
      justify-content: flex-start;
      overflow: hidden;
    }
    .scrollCont {
     display: none
    }

    .proyectsMedia {
      min-width: 98%;
      margin-right: 5%;
      display: inline-block;
    height: 95%;
    background-color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => !theme.body};
    border-radius: 0 30px;
 
    }
    
    .integrar {
      padding: 2% 4%;
    }
    .title {
      font-size: 8vw;
    }
    .right,
    .left {
      width: 1.5em;
      justify-content: center;
      align-items: center;
      .leftArrow,
      .rightArrow {
        width: 1.5em;
        height: 1.5em;
      }
      .rightArrow { 
        
      }
    }
    .integrarTxt {
      h3 {
        font-size: 2em;
      }
      p {
        font-size: 0.7em;
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
    .imgs{
      height: 8em;
      width: 18em;
    }
    .imgsIntegrar {
      width: 3.4em;
      height: 6.5em;
    }
    .imgsPampaQuiz {
      width: 60vw;
    }
    .footer {
      display: none;
    }
  }
`;
