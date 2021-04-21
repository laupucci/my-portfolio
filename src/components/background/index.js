import React, { useState, useEffect } from "react";
import background from "../../media/note.jpg"
import { BackgroundCont } from "./style"
import load from "../../media/loading.gif"


const Background = () => {
  // const [loading, setLoading] = useState(true)
   
  // const onLoad =() => {
  //   let imageBack = document.getElementsByClassName("backg")
  //   console.log(imageBack)
  //   imageBack.onload= () => {}
  //  }
  // useEffect(() => {
  //   onLoad()
  //   setLoading(false)
  //  }, [])

  // if (loading){
  //   return(
  //    <img src={load} className="loader"/>
  //   )
  // }
  return (
    <BackgroundCont>
       <img src={background} className="backg" alt="Fondo" id="back" />
       {/* onLoad={onLoad}/> */}
    </BackgroundCont>
  );
};

export default Background;
