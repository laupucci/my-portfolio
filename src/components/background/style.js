import styled from "styled-components";

export const BackgroundCont = styled.section`
  @keyframes scroll {
    from {
      transform: translateY(-30%);
    }
    to {
      transform: translateY(-25%);
    }
  }
  position: fixed;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  img {
    min-height: 100%;
    width: 100%;
    transition: 0.5s;
    object-fit: cover;
    /* transform: scaleX(-1); */
    /* transform: translateY(-50%); */
    animation: scroll 1s linear infinite;
    animation-play-state: paused;
    animation-delay: ${(props) => props.scrollInput * -1}s;
    animation-iteration-count: 1;
    animation-fill-mode: both;
  }
    @media (max-width: 500px) {
    img {
      min-height: 142vh;
    }
  }
`;