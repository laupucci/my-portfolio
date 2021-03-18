import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family:  "Acme", sans-serif;
  }
  `