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
    &:focus {
      box-decoration-break: none;
      border: none;
      border-color: none;
      box-shadow: 0;
    }
    &:active {
      box-decoration-break: none;
      border: none;
      border-color: none;
      box-shadow: 0;
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

  .p1 {
    color: ${whitish};
    font-size: 1.2vw;
    font-family: "Architects Daughter", sans-serif;
  }
  .p1Ligth {
    color: #272727;
    padding: 1em;
    font-size: 1.2vw;
    font-family: "Architects Daughter", sans-serif;
  }
  .menu_item {
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
    font-size: 3rem;
    font-weight: bold;
    display: ${({ active }) => (active ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    color: ${whitish};
    cursor: pointer;
    span {
      position: relative;
      top: 0.5rem;
    }
  }

  .topLight {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 3%;
    height: 6%;
    font-size: 250%;
    font-weight: bold;
    display: ${({ active }) => (active ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    color: #272727;
    cursor: pointer;
    span {
      position: relative;
      top: 0.5rem;
    }
  }

  @media screen and (max-width: 950px) {
    width: 100vw;
    height: 9vh;
    justify-content: space-between;
    position: fixed;

    .logo {
      margin: 0;
      font-size: 4vw;
    }

    .menu {
      position: absolute;
      width: 87vw;
      height: 100vh;
      top: -100vh;
      left: 0;
      background-color: rgba(0, 0, 0, 0.8);
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
          height: 8vh;
        }
      }
    }

    .p2 {
      color: ${whitish};
      font-size: 5vw;
      font-family: "Architects Daughter", sans-serif;
      justify-content: center;
      align-items: center;
      margin: 2%;
    }

    .theme {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      min-width: 28vw;
      height: 7vh;
      background-color: transparent;
      border: none;
      margin-bottom: 0;
      &:hover {
        background-color: rgba(249, 35, 9, 0.6);
        border-radius: 0 7px;
        cursor: pointer;
        height: 8vh;
      }
      &:focus {
        box-decoration-break: none;
        border: none;
        border-color: none;
        box-shadow: 0;
      }
      &:active {
        box-decoration-break: none;
        border: none;
        border-color: none;
        box-shadow: 0;
      }
      .iconTheme {
        width: 5vw;
        height: 5vh;
        color: ${whitish};
      }
      .pTheme {
        color: ${whitish};
        font-family: "Architects Daughter", sans-serif;
        font-size: 5vw;
      }
    }

    .top {
      width: 8%;
      height: 6%;
    }
    .menu.active {
      top: 0;
    }
    .menu_open.active {
      margin-right: 4%;
      display: block;
      width:7vw;
      height: 7vw;
      cursor: pointer;
      color: ${whitish};
    }
    .menu_close.active {
      position: absolute;
      display: block;
      cursor: pointer;
      width: 1.2vw;
      height: 1.2vw;
      top: 0.9vh;
      right: 1.2vw;
      z-index: 11;
      width: 5vw;
      height: 5vw;
      padding: 1%;
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
    background-color: rgba(249, 35, 9, 0.4);
  }
  @media screen and (max-width: 950px) {
    display: none;
  }
`;
