import styled from "styled-components";

export const BackgroundCont = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  @keyframes scroll {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(0%);
    }
  }

  img {
    min-height: 100%;
    width: 100%;
    transition: 0.5s;
    object-fit: cover;
    animation: scroll 1s linear infinite;
    animation-play-state: paused;
    animation-delay: ${(props) => props.scrollInput * -1}s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }

  @media (max-width: 500px) {
    min-height: 125%;
    width: 100%;
  }
`;
