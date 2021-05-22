import styled from "styled-components";

export const BackgroundCont = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  white-space: nowrap;
  z-index: -1;

  img {
    min-height: 100%;
    width: 100%;
    object-fit: cover;
    }

  @media (max-width: 500px) {
    min-height: 125%;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
`;
