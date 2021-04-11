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
    justify-content: flex-end;
    align-items: center;
  }
  .scrollCont{
    width: 90%;
 height: 70vh;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;

  }
  .container {
    /* height: 99vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1%; */
    display: flex;
 width: 80%;
 height: 68vh;
 border: none;
 margin: 1px;
 overflow: hidden;
 white-space: nowrap

 /*will change this to hidden later to deny scolling to user*/

  }

  .right{
    display: flex;
  justify-content: center;
  align-items: center;
 float: right; 
 width: 6.5vw;
 height: 68vh;
 .rightArrow{
  width: 6vw;
   height:  6vw;
   cursor: pointer;
 }
}
.left{
  display: flex;
  justify-content: center;
  align-items: center;
 float: left; 
 width: 6.5vw;
 height: 68vh;

 .leftArrow{
   width: 6vw;
   height:  6vw;
   cursor: pointer;
 }
}

  .proyects {
//    display: flex;
   // flex-direction: column; 
    //justify-content: center;
 display: inline-block;
    min-width: 90%;
    height: 98%;
    background-color: ${({ theme }) => theme.body};
 border: 1px dotted  ${({ theme }) => !theme.body};
 border-radius: 10px;
 //overflow: visible
 /* white-space: pre */
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
  li{
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
    border: 5px solid ${({ theme }) => theme.imgs};
    border-radius: 17px;
  }
  .imgsDubsnip {
    width: 24vw;
    margin: 1em;
    border: 5px solid ${({ theme }) => theme.imgs};
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
    padding: 1%
  }
  .integrarTxt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
  }

  /* @media (max-width: 1024px) {
    .background {
      justify-content: flex-end;
    }
    .container {
      width: 100vw;
      height: 84%;
      justify-content: flex-start;
    }
    .title {
      font-size: 5vw;
    }
    .integrar {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
    }
    .integrarTxt {
      width: 80vw;
      h3 {
        font-size: 90%;
        margin: 1%;
        padding-left: 2%;
      }
      p {
        font-size: 70%;
        text-align: justify;
        padding: 0 2%;
      }
    }
    .imgsIntegrar {
      width: 4%;
      margin: 1vw;
      border: 2px solid #151515;
      border-radius: 7px;
      margin-right: 2%;
    }
    .imgsDubsnip {
      width: 18%;
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
        font-size: 2.9vw;
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
  } */
`;
