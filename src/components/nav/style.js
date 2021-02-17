import { colors } from "../../utils";
import styled from "styled-components";
const { whitish } = colors;

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  font-family: "'Julius Sans One";
  background-color: rgba(4, 4, 4, 0.75);
  height: 10vh;
  padding: 0em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  transition: background 0.5s ease;

  .logo {
    font-size: 1.5rem;
    font-family: "Julius Sans One";
    color: ${whitish};
    padding: 1em;
    margin-left: 2.75em;
  }
  .icon {
    color: ${whitish};
    // padding: 1em;
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
  .en {
    color: rgba(228, 228, 228);
  }
  .enLight {
    color: #272727;
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
      min-height: 50px;
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
    }
    .iconTheme {
      color: ${whitish};
    }
  }

  .p1 {
    color: ${whitish};
    font-size: 1.2em;
    font-family: "Sanchez";
  }
  .p1Ligth {
    color: #272727;
    padding: 1em;
    font-size: 16px;
    font-family: "Sanchez";
  }
  .p2 {
    color: ${whitish};
    padding: 1em;
    font-size: 16px;
    font-family: "Sanchez";
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
    border-radius: 50%;
    border: 2px solid ${whitish};
    background: none;
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
    border-radius: 50%;
    border: 2px solid #272727;
    background: none;
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

  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: space-between;

    .logo {
      font-size: 4vw;
    }
    .menu {
      justify-content: flex-end;
      align-items: center;
    }

    .p2 {
      color: ${whitish};
      font-size: 2.6vw;
      font-family: "Sanchez";
      justify-content: flex-end;
      align-items: center;
      margin: 3%;
      &:hover {
        background-color: rgba(163, 189, 49, 0.6);
        border-radius: 7px;
        min-height: 7vh;
      }
    }
    .top {
      width: 8%;
      height: 6%;
    }
  }
  @media (max-width: 400px) {
    width: 100vw;
    padding: 0;
    justify-content: space-between;
    .top {
      width: 7.2%;
      height: 4.2%;
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
    background-color: rgba(249, 35, 9, 0.4);
    border: none;
    margin-bottom: 4px;
    border-radius: 0 7px;
    &:hover {
      background-color: rgba(249, 35, 9, 0.1);
    }
  }
`;
