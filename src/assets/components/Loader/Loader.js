import React from "react"
import s from "./styleLoader.module.css"
import loaderGif from "../../images/colorful-loader-gif-transparent-13.gif"

const Loader=()=>{
     return(
          <div className={s.wrap}> 
               <img src={loaderGif} alt="Загрузка..."/>
          </div>
     )
}

export default Loader