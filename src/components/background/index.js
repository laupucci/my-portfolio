import React from "react";
import background from "../../media/note.jpg"
import { BackgroundCont } from "./style"


const Background = () => {
  return (
    <BackgroundCont>
      <img src={background} alt="Fondo" />
    </BackgroundCont>
  );
};

export default Background;
