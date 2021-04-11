import React from "react";
import { ProjectsContainer } from "./style";
import Footer from "../footer";
import { languages } from "./languages";
import student from "../../media/img1.jpg";
import teacher from "../../media/img2.jpg";
import preceptor from "../../media/img3.jpg";
import dubsnip from "../../media/dubsnip.png";
import { IoMdArrowDropleftCircle } from "react-icons/io"
import { IoMdArrowDroprightCircle } from "react-icons/io"

export default function Projects({ language, theme }) {
  //   document.getElementById('left-button').onclick = function () {
  //     scrollLeft(document.getElementById('content'), -300, 1000);
  //  }
  const handleLeftClick = () => {
    let scrollPosition = document.getElementById("content")?.scrollLeft;
    console.log(scrollPosition);
    if (scrollPosition) {
      scrollPosition = scrollPosition - 800;
      document
        .getElementById("content")
        ?.scroll({ left: scrollPosition, behavior: "smooth" });
    }
  };
  function handleRightClick() {
    let scrollPosition = document.getElementById("content")?.scrollLeft;
    console.log(scrollPosition);
    if (scrollPosition || scrollPosition === 0) {
      scrollPosition = scrollPosition + 800;
      document
        .getElementById("content")
        ?.scroll({ left: scrollPosition, behavior: "smooth" });
    }
  }

  return (
    <ProjectsContainer id="proyectos">
      <div className="background">
        <h2 className="title">{languages[language]?.projects}</h2>
        <div className="scrollCont">
        <div className="left">
          <IoMdArrowDropleftCircle className='leftArrow' onClick={handleLeftClick}/>
      
        </div>
        <div className="container" id="content">
          <div className="proyects">
            <div className="integrar">
              <div className="integrarTxt">
                <h3>IntegrAr</h3>
                <p>{languages[language]?.integrAr.desc}</p>
                <p>{languages[language]?.dubsnip.stack}</p>
              </div>
              <div className="imgs">
                <img className="imgsIntegrar" src={student} />
                <img className="imgsIntegrar" src={teacher} />
                <img className="imgsIntegrar" src={preceptor} />
              </div>
            </div>
          </div>
          <div className="proyects">
            <div className="integrar">
              <div className="integrarTxt">
                <h3>DubsNip</h3>
                <p>{languages[language]?.dubsnip.desc}</p>
                {languages[language]?.dubsnip.list.map(item =>
                <li>{item}</li>
                )}
                <p>{languages[language]?.dubsnip.stack}</p>
                <p>{languages[language]?.dubsnip.henry}</p>
              </div>
              <div className="img">
                <img className="imgsDubsnip" src={dubsnip} />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
        <IoMdArrowDroprightCircle className='rightArrow' onClick={handleRightClick}/>
    
        </div>
          </div>
        <div className="footer">
          <Footer
            theme={theme}
            language={language}
            text={languages[language]?.contact}
            to="contacto"
            className="footer"
          />
        </div>
      </div>
    </ProjectsContainer>
  );
}
