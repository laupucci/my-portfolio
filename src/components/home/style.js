import styled from "styled-components";
import { colors } from "../../utils";
const { whitish } = colors;

export const HomeContainer = styled.section`
  height: 100vh;
  width: 100vw;
  //font-family: 'Architects Daughter', sans-serif;

  .background {
    min-height: 100%;
    min-width: 100%;
    background: rgba(0, 0, 0, 0.8);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column-reverse;
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
  }

  .me_container {
    color: #e4e4e4;
    //background-color: rgba(107, 107, 107, 0.5);
    background-color: rgba(249, 35, 9, 0.4);
    width: 40vw;
    height: 28vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 7vw 5vw 5vw 0;
    margin-bottom: 2%;
    //name duration delay fill-mode
    animation: meCont 3s 2s backwards;

    overflow: hidden;
  }

  @keyframes meCont {
    from {
      margin-left: 100vw;
      width: 0%;
    }

    to {
      margin-left: 0%;
      width: 40vw;
    }
  }
  .title {
    font-size: 4vw;
    margin: 1%;
    font-family: "Acme", sans-serif;
    color: ${whitish};
    //name duration timing delay fill-mode
    animation: title 0.2s ease-in 3.7s backwards;
    overflow: hidden;
  }
  @keyframes title {
    from {
      margin-right: 100vw;
      font-size: 0vw;
    }

    to {
      margin-right: 0%;
      font-size: 4vw;
    }
  }

  .subtitle {
    font-size: 2.5vw;
    margin: 0;
    color: ${whitish};
    font-family: "Acme", sans-serif;
    //name duration timing delay fill-mode
    animation: title 0s ease-in 3s backwards;
    overflow: hidden;
  }
  @keyframes subtitle {
    from {
      margin-right: 100vw;
      font-size: 0vw;
    }

    to {
      margin-right: 0%;
      font-size: 4vw;
    }
  }

  .descriptionTitle {
    color: ${whitish};
    font-family: "Acme", sans-serif;
    margin: 0;
    margin-top: 1%;
    //name duration timing delay fill-mode
    animation: descTitle 2s ease-in 5s backwards;
    overflow: hidden;
  }
  @keyframes descTitle {
    from {
      margin-right: 100vw;
    }

    to {
      margin-right: 0%;
    }
  }

  .description {
    font-size: 1.7vw;
    margin: 1%  0;
    padding: 0 4%;
    color: ${whitish};
    font-family: "Acme", sans-serif;
    //name duration timing delay fill-mode
    animation: descrip 1s ease-in 6s backwards;
    overflow: hidden;
  }
  @keyframes descrip {
    from {
      margin-bottom: 100vw;
      font-size: 0vw;
    }

    to {
      margin-bottom: 0%;
      font-size: 120%;
    }
  }

  .desc_container {
    //background-color: rgba(249, 35, 9, 0.4);
    background-color: rgba(101, 101, 101, 0.55);
    width: 70vw;
    height: 42vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5vw 9vw 0 5vw;
       //name duration timing delay fill-mode
    animation: descCont 3s ease-in 3s backwards;
    overflow: hidden;
  }

  @keyframes descCont {
    from {
      margin-right: 100vw;
      width: 0%;
    }

    to {
      margin-right: 0%;
      width: 44vw;
    }
  }

  .backgroundLigth {
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.75);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }

  .me_containerLight {
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
      font-family: "Acme", sans-serif;
    }
    .subtitleLigth {
      font-size: 2.5vw;
      margin: 0;
      color: #272727;
      font-family: "Acme", sans-serif;
    }
  }

  .desc_containerLight {
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
    font-family: "Acme", sans-serif;
  }

  .descriptionLigth {
    font-size: 1.6vw;
    padding: 0 4%;
    color: #171717;
    font-family: "Acme", sans-serif;
  }
  
  @media (max-width: 1400px) {
    min-height: 100vh;
    min-width: 100vw;
     .background {
    height: 100vh;
    width: 100%; }
    }
  @media (max-width: 500px) {
    min-height: 100vh;
    min-width: 100vw;
    .background {
    height: 100%;
    width: 100%;
    }
    .container {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      margin-top: 1vh;
    }

    .me_container {
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

    .desc_container {
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
