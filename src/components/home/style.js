import styled from "styled-components";
import { colors } from "../../utils";
const { whitish } = colors;

export const HomeContainer = styled.section`
  height: 100vh;
  width: 100vw;
  //font-family: 'Architects Daughter', sans-serif;

  .background {
    object-fit: cover;
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
    top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .me_container {
    color: #e4e4e4;
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
    animation: meCont 2s 1s backwards;

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
    animation: title 0.2s ease-in 3s backwards;
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
    animation: title 0s ease-in 2.5s backwards;
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
    animation: descTitle 2s ease-in 4s backwards;
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
    margin: 1% 0;
    padding: 0 4%;
    color: ${whitish};
    font-family: "Acme", sans-serif;
    //name duration timing delay fill-mode
    animation: descrip 0.4s ease-in 4.5s backwards;
    overflow: hidden;
    text-align: center;
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
    animation: descCont 2.5s ease-in 2.7s backwards;
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
    object-fit: cover;
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
    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    .me_container,
    .me_containerLight {
      width: 62vw;
      height: 24vh;
      padding: 0 3%;
      justify-content: center;
      .title,
      .titleLigth {
        font-size: 7vh;
        text-align: center;
      }
      .subtitle,
      .subtitleLigth {
        font-size: 5vh;
      }
    }
    .descriptionTitle,
    .descriptionTitleLigth {
      font-size: 4.5vh;
    }
    .desc_container,
    .desc_containerLight {
      width: 81vw;
      height: 55vh;
    }
    .description,
    .descriptionLigth {
      font-size: 3.9vw;
    }
  }
  @media screen and (max-width: 500px) {
    .background {
      display: flex;
      align-items: center;
    }

    .me_container,
    .me_containerLight {
      width: 73vw;
      height: 15vh;
      padding: 0 3%;
      justify-content: center;

      .title,
      .titleLigth {
        font-size: 4vh;
        text-align: center;
      }
      .subtitle,
      .subtitleLigth {
        font-size: 3.8vh;
      }
    }

    .logo {
      width: 38vw;
      height: 31vh;
    }
    .descriptionTitle,
    .descriptionTitleLigth {
      display: none;
    }
    .desc_container,
    .desc_containerLight {
      width: 81vw;
      height: 64vh;
    }
    .description {
      font-size: 4.4vw;
  }
    .descriptionLigth {
      font-size: 5vw;
    }

    .footer{
      display: none
    }

  }
 
`;
