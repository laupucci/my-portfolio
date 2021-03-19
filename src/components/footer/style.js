import styled from "styled-components";

export const FooterContainer = styled.section`
  position: relative;
  bottom: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  padding-bottom: 1.2%;
  .pages {
    width: 15%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
  .git,
  .linkedin,
  .cv {
    color: ${({ theme }) => theme.text};
    width: 5vw;
    height: 5vh;
    cursor: pointer;
    &:hover {
      transform: scale(1.5);
      margin-top: -0.4rem;
    }
  }
  .cvDiv {
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      transform: scale(1.5);
      margin-top: -0.4rem;
    }
    .cv,
    p {
      font-family: "Acme", sans-serif;
      margin: 0;
    }
  }

  .cta {
    width: 75%;
    overflow: hidden;
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
      font-family: "Acme", sans-serif;
      color: ${({ theme }) => theme.text};
      transition: 0.3s ease-in-out;
    }
    .arrow {
      margin-top: -0.2rem;
      width: 1.7vw;
      height: 1.7vw;
      color: ${({ theme }) => theme.text};
      transition: 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 1024px) {
    .pages {
      width: 35%;
    }
    .git,
    .linkedin,
    .cv {
      width: 3.2vw;
      height: 3.2vw;
    }
    .cta {
      width: 35%;
      .cta_txt {
        font-size: 1vw;
      }
      .arrow {
        width: 3vw;
        height: 3.7vw;
      }
    }
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    .pages {
      width: 45%;
    }
    .git,
    .linkedin,
    .cv {
      width: 7vw;
      height: 7vh;
    }
    .cta {
      width: 45%;
      .cta_txt {
        font-size: 3vw;
      }
      .arrow {
        width: 8vw;
        height: 8.7vw;
      }
    }
  }
`;
