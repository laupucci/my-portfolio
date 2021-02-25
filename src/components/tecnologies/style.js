import styled from "styled-components";
import { colors } from "../../utils";
const { whitish } = colors;

export const TecContainer = styled.section`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  

.background {
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title{
    color: ${whitish};
    font-size: 4vw;
    font-family: 'Acme', sans-serif;

  }
  .cont{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 94vh;
  width: 100vw;
  }
.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
}
.tec{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.52vw;
}
.logo{
  width: 6em;
  height: 6em;
  color: ${whitish};
}
.express{
  height: 6em;
  display: flex;
  align-items: center;
  justify-content: center
}
.logoE{
  width: 6em;
  color: ${whitish};
}
.logoTxt{
  color: ${whitish};
}
.logoTxtE{
  color: ${whitish};
  margin-top: 2em
}
.logoLight{
  width: 6em;
  height: 6em;
  color: #202020;
}
  .cta {
   // position: absolute;
   color: #3b3228;
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
      font-size: 1vw;
      color: #e4e4e4;
      transition: 0.3s ease-in-out;
      font-family: 'Acme', sans-serif;
    }
    .cta_txtLight {
      font-size: 1vw;
      transition: 0.3s ease-in-out;
      font-family: 'Acme', sans-serif;
    }
    .arrow {
      margin-top: -0.2rem;
      width: 1.7vw;
      height: 1.7vw;
      transition: 0.3s ease-in-out;
      color: #e4e4e4;
    }
    .arrowLight {
    margin-top: -0.2rem;
    width: 1.7vw;
    height: 1.7vw;
    transition: 0.3s ease-in-out;
    color: #272727;
  }
  }
  .backgroundLight {
    height: 100%;
    background: rgba(255, 255, 255, 0.75);
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .titleLight {
    color: #272727;
    font-size: 4vw;
    font-family: 'Acme', sans-serif;
  }
  p{
    font-family: 'Acme', sans-serif;
  }
  .titleCont{
    margin-top: 2%;
  }
`