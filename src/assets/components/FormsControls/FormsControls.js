import React from "react"
import s from "./styleFormsControls.module.css"

const FormsControlsCreator = (Component, side) => ({input, meta, ...props}) => {
     let hasError = meta.error && meta.touched
     
     return(
          <div className={`${s[`${side}`]} ${hasError && s.error}`}>
               {side === "left" && <Component className={s.component} {...input} {...props}/>}

               {hasError 
                    ?<div className={s.errorMessage}>
                         <span>{meta.error}</span>
                    </div>
                    :<></>
               }

               {side === "right" && <Component className={s.component} {...input} {...props}/>}
          </div>
     )
}


export const DialogTextarea = FormsControlsCreator((props) => <textarea {...props}/> , "right")

export const ProfileTextarea = FormsControlsCreator((props) => <textarea {...props}/> ,"left")

export const LoginInput = FormsControlsCreator((props) => <input {...props}/>, "left")