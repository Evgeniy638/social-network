import React from "react"
import s from "./styleStatus.module.css"

const Status = (props) => {
     const textInputStatus = React.createRef()

     const writeStatus = () => {
          let newText = textInputStatus.current.value
          props.writeStatus(newText)
     }

     const saveNewStatus = () =>{
          props.disableEditMode()
          props.saveNewStatus(props.userId, props.textStatus)
     }

     if (props.userId !== props.id) return (
          <div className={s.wrap}>
               <span >Статус: {props.textStatus}</span>
          </div>
     )

     return (
          <div className={s.wrap}>
               <span 
                    onDoubleClick={props.enableEditMode}
                    className = {s.myStatus}
               >Статус: </span>
               
               {(props.editMode)
                    ? <input
                         ref={textInputStatus}
                         autoFocus
                         onBlur={saveNewStatus}
                         value={props.textStatus}
                         onChange={writeStatus}
                    />
                    : <span
                         className = {s.myStatus}
                         onDoubleClick={props.enableEditMode}
                    > {props.textStatus}</span>
               }
          </div>
     )
}

export default Status