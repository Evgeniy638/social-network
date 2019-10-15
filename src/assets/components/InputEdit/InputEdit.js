import React, { useState, useEffect } from "react"
import s from "./styleInputEdit.module.css"

//props = {value, userId, additionalText, textInput, apiSaveNewValue, }

const InputEdit = (props) => {
     const [editMode, setEditMode] = useState(false)
     const [text, setText] = useState(props.value)

     useEffect(() => {
          setText(props.value)
     },[props.value])

     const enableEditMode = () => setEditMode(true)
     const disableEditMode = () => setEditMode(false)

     const writeName = () => {
          setText(props.textInput.current.value)
     }

     const saveNewValue = () => {
          props.apiSaveNewValue(props.userId, props.textInput.current.value)

          disableEditMode()
     }

     if (props.userId !== props.id) return (
          <div className={s.wrap}>
               <span>{props.additionalText}{text}</span>
          </div>
     )

     return(
          <div className={s.wrap}>
               <span
                    className={s.cursorPointer}
                    onDoubleClick={enableEditMode}
               >{props.additionalText}</span>

               {(editMode)
                    ? <input
                         ref={props.textInput}
                         autoFocus
                         onBlur={saveNewValue}
                         value={text}
                         onChange={writeName}
                    />
                    : <span
                         className={s.cursorPointer}
                         onDoubleClick={enableEditMode}
                    >{text}</span>
               }
          </div>
     )
}

export default InputEdit