import React, { useEffect, useState } from "react";
import background from "../../media/note.jpg"
import { BackgroundCont } from "./style"


const Background = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const scrollPosition =
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    setScroll(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => window.requestAnimationFrame(handleScroll)
      // handleScroll
    );
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BackgroundCont scrollInput={scroll}>
      <img src={background} alt="Fondo" />
    </BackgroundCont>
  );
};

export default Background;
