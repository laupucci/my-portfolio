import styled from "styled-components";
import { colors } from "../../utils";
const { whitish } = colors;

export const HomeContainer = styled.section`
  height: 100vh;
  width: 100vw;
  //font-family: 'Architects Daughter', sans-serif;

  .background {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-top: 4em; */
  }

  .hero_txt {
    color: #e4e4e4;
    //background-color: rgba(107, 107, 107, 0.5);
    background-color: rgba(249, 35, 9, 0.4);
    width: 40vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 7vw 5vw 5vw 0;
    margin-bottom: 2%;
    margin-top: 2%;

    .title {
      font-size: 4vw;
    margin: 1%;
      font-family: 'Kaushan Script', sans-serif;
      color: ${whitish};
    }
    .subtitle {
      font-size: 2.5vw;
    margin: 0;
    color: ${whitish};
      font-family: 'Acme', sans-serif;
    }
  }

  .descriptionTitle {
    //padding-top: 4%;
    color: ${whitish};
    font-family: 'Acme', sans-serif;
    margin-bottom: 0;
  }

  .description {
    font-size: 120%;
    padding: 0 4%;
    color: ${whitish};
    font-family: 'Architects Daughter', sans-serif;
  }

  .logo_container {
    //background-color: rgba(249, 35, 9, 0.4);
    background-color: rgba(101, 101, 101, 0.55);
    width: 70vw;
    height: 44vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5vw 9vw 0 5vw;
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
      font-size: 1vw;
      font-family: 'Acme', sans-serif;
      color: ${whitish};
      transition: 0.3s ease-in-out;
    }
    .arrow {
      margin-top: -0.2rem;
      width: 1.7vw;
      height: 1.7vw;
      color: ${whitish};
      transition: 0.3s ease-in-out;
    }
    .cta_txtLight {
    font-size: 1vw;
    font-family: 'Acme', sans-serif;
    color: #272727;
    transition: 0.3s ease-in-out;
  }
  .arrowLight {
    margin-top: -0.2rem;
    width: 1.7vw;
    height: 1.7vw;
    transition: 0.3s ease-in-out;
    color: #272727;
  }
  }

  .backgroundLigth {
    height: 100%;
    background: rgba(255, 255, 255, 0.75);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero_txtLight {
    color: #e4e4e4;
    margin-bottom: 2%;
    width: 70vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border-radius: 0 55px 0 0; */

  .titleLigth {
    color: #202020;
    font-size: 4vw;
    margin: 1%;
    font-family: 'Kaushan Script', sans-serif;
  }
  .subtitleLigth {
    font-size: 2.5vw;
    margin: 0;
    color: #272727;
    font-family: 'Acme', sans-serif;
  }
}

.logo_containerLight {
    /* background-color: rgba(249, 35, 9, 0.7); */
    width: 70vw;
    height: 44vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border-radius: 0 0 0 55px; */
  }

  .descriptionTitleLigth {
    //padding-top: 4%;
    color: #171717;
    font-family: 'Acme', sans-serif;
  }

  .descriptionLigth {
    font-size: 1.6vw;
    padding: 0 4%;
    color: #171717;
    font-family: 'Architects Daughter', sans-serif;
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
