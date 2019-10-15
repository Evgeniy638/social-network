import React from "react"
import s from "./styleDeleteProfile.module.css"

const DeleteProfile = (props) => {
     return(
          <div className={s.wrap} ref={props.wrapConfirmDeleteProfile}>
               <div className={s.confirm}>
                    <div className={ s.question }>Вы действительно хотете удалить профиль?</div>
                    <div 
                         className={`${s.answer} ${s.yes}`} 
                    ><span onClick={props.deleteProfile}>Да</span></div>
                    <div 
                         className={`${s.answer} ${s.no}`}
                    ><span onClick={props.confirmDeleteProfileHide}>Нет</span></div>
               </div>
          </div>
     )
}

export default DeleteProfile