import { colors } from "../../utils";
import styled from "styled-components";
const { whitish } = colors;

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: rgba(4, 4, 4, 0.75);
  height: 10vh;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  transition: background 0.5s ease;

  .logo {
    font-size: 2vw;
    font-family: "Acme", sans-serif;
    color: ${whitish};
    padding: 1em;
    margin-left: 2.75em;
  }
  .menu_open,
  .menu_close,
  .buttonLanguage {
    display: none;
  }

  .icon {
    color: ${whitish};
    width: 2vw;
  }
  .menu {
    display: flex;
    flex-direction: "row";
    padding: 0 2em;
    justify-content: center;
    align-items: center;
    margin-right: 2.75em;
  }

  .theme {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 6.5em;
    background-color: transparent;
    border: none;
    &:hover {
      background-color: rgba(249, 35, 9, 0.6);
      border-radius: 0 7px;
      cursor: pointer;
    }
    .pTheme {
      color: ${whitish};
      font-family: "Architects Daughter", sans-serif;
      font-size: 1.2vw;
    }
    .iconTheme {
      color: ${whitish};
    }
  }
  .pLanguage {
    color: ${({ theme }) => theme.text};
    font-size: 1.2vw;
    padding: 1em;
    font-family: "Architects Daughter", sans-serif;
  }
  .menu_item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${whitish};
    padding: 0 1em;
    font-size: 1.2vw;
    font-family: "Architects Daughter", sans-serif;
    transition: 0.3s;
    &:hover {
      background-color: rgba(249, 35, 9, 0.6);
      border-radius: 0 7px;
    }
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }

  .top {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 3%;
    height: 6%;
    font-size: 5vw;
    font-weight: bold;
    display: ${({ active }) => (active ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    span {
      position: relative;
      top: 0.5rem;
    }
  }
  .mobile {
    display: none;
  }
  @media screen and (max-width: 950px) {
    width: 100vw;
    height: 9vh;
    justify-content: space-between;
    position: fixed;

    .logo {
      margin: 0;
      font-size: 2.5vw;
    }
    .mobile {
      display: flex;
      .pages {
        width: 100%;
        .git,
        .linkedin,
        .cv,
        p {
          color: #e8e8e8;
        }
      }
    }
    .menu {
      position: absolute;
      width: 100%;
      height: 100vh;
      top: -100vh;
      background-color: rgba(0, 0, 0, 0.8);
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      transition: 0.3s ease-out;
      .buttonLanguage {
        background-color: transparent;
        border: none;
        display: block;
        margin-top: 0;
        font-family: "Architects Daughter", sans-serif;
        width: 13vw;
        color: ${whitish};
        font-size: 5vw;
        cursor: pointer;
        &:hover {
          background-color: rgba(249, 35, 9, 0.6);
          border-radius: 0 7px;
          min-height: 10vh;
          min-width: 35vw;
        }
      }
    }

    .pMenuItems {
      color: ${whitish};
      font-size: 5vw;
      font-family: "Architects Daughter", sans-serif;
      justify-content: center;
      align-items: center;
      margin: 0 2%;
    }
    .menu_item {
      margin: 0;
      &:hover {
        min-height: 10vh;
        min-width: 35vw;
      }
    }

    .theme {
      min-width: 33vw;
      height: 7vh;
      margin-bottom: 0;
      &:hover {
        min-height: 10vh;
        min-width: 35vw;
      }
      &:active {
        text-decoration: none;
      }

      .iconTheme {
        width: 5vw;
        height: 5vh;
      }
      .pTheme {
        font-size: 5vw;
      }
    }

    .top {
      width: 18%;
      height: 11%;
      font-size: 14vw;
    }
    .menu.active {
      top: 0;
    }
    .menu_open.active {
      margin-right: 4%;
      display: block;
      width: 5vw;
      height: 5vw;
      cursor: pointer;
      color: ${whitish};
    }
    .menu_close.active {
      margin-right: 4%;
      position: absolute;
      display: block;
      cursor: pointer;
      width: 1.2vw;
      height: 1.2vw;
      top: 0.9vh;
      right: 1.2vw;
      z-index: 11;
      width: 3.5vw;
      height: 3.5vw;
      padding: 1%;
    }
    .top {
      width: 3vw;
      height: 3vw;
    }
  }


  @media screen and (max-width: 600px) {
    max-width: 100vw;
    .menu {
      position: absolute;
      max-width: 100%;
      height: 100vh;
    }
    .pages {
       width: 100%;
   
    }
    .logo {
      font-size: 4vw;
    }
    .menu_open.active {
      width: 7vw;
      height: 7vw;
      }
    .menu_close.active {
      width: 5vw;
      height: 5vw;
      margin-top: 2%
    }
    .top {
      width: 8vw;
      height: 8vw;
    }
    
  }
`;

export const LanguageCont = styled.li`
  position: relative;
  padding-bottom: 0.8em;
  margin-bottom: -0.8em;
  cursor: pointer;
  color: transparent;
  &:hover > ul {
    margin: 0;
    display: block;
  }
  & > ul {
    display: none;
    min-width: 150px;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    padding: 2em;
    font-size: 0.9em;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    border-radius: 0.4em;
    & li {
      margin: 0;
      width: 100%;

      &:last-of-type a {
        border-radius: 0 0 0.3em 0.3em;
      }
    }
  }
  button {
    text-align: center;
    display: block;
    width: 100%;
    padding: 1em 2em;
    text-decoration: none;
    margin-right: 2em;
    background-color: rgba(249, 35, 9, 0.75);
    border: none;
    margin-bottom: 4px;
    border-radius: 0 7px;
    font-family: "Architects Daughter", sans-serif;
    // color: #272727;
    color: rgba(228, 228, 228);
    &:hover {
      background-color: rgba(249, 35, 9, 0.1);
    }
  }
  .btnLanguage {
    font-family: "Architects Daughter", sans-serif;
    color: rgba(228, 228, 228);
    background-color: ${({ theme }) => theme.btnLanguage};
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
