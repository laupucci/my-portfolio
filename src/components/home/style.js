import styled from "styled-components";

export const HomeContainer = styled.section`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  scroll-behavior: smooth;
  //margin: 0 auto;

  .background {
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* margin-top: 4em; */
  }

  .hero_txt {
    color: #e4e4e4;
    background-color: rgba(107, 107, 107, 0.5);
    width: 38vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 0 55px;

    .title {
      color: #e4e4e4;
      font-size: 250%;

    }
    .subtitle {
      font-family: "Nixie One";
      font-size: 2.25rem;
      color: #e4e4e4;
    }
  }

  .descriptionTitle {
   //padding-top: 4%;
   color: #e4e4e4;
  }

  .description {
   font-size: 120%;
   padding: 0 4%;
   color: #e4e4e4;
  }

  .logo_container {
    background-color: rgba(249, 35, 9, 0.4);
    width: 38vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 55px 0 0;
  }

  .cta {
    position: absolute;
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
      width: 2rem;
      height: 2rem;
      transition: 0.3s ease-in-out;
    }
  }
  @media (max-width: 500px) {
    .container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      margin-top: 1vh;
    }

    .hero_txt {
      width: 78vw;
      height: 43vh;
      padding: 0 0rem 0 1rem;

      .title {
        font-size: 7.5vh;
      }
      .subtitle {
        font-size: 3.8vh;
      }
    }

    .logo {
      width: 38vw;
      height: 31vh;
    }

    .logo_container {
      width: 78vw;
      height: 35vh;
    }

    .cta {
      position: absolute;
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
        font-size: 1.5vh;
        font-family: "Sanchez";
        color: #e4e4e4;
        transition: 0.3s ease-in-out;
      }
      .arrow {
        margin-top: -0.2rem;
        width: 2rem;
        height: 2rem;
        transition: 0.3s ease-in-out;
        margin-bottom: 1vh;
      }
    }
  }
`;
