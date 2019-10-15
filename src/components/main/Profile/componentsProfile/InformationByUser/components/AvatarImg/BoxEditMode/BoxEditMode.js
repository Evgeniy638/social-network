import React, { useRef } from "react"
import s from "./styleBoxEditMode.module.css"

const BoxEditMode = (props) => {
     const handleClickOutside = (event) => {
          if (s.wrapEditMode === event.target.className) {
               props.disableEditMode()
          }
     }

     const newPhoto = useRef()

     const changePhoto = e => {
          e.preventDefault();
          const reader = new FileReader()
          
          if (newPhoto.current.files.length === 0) return false

          const file = newPhoto.current.files[0]

          reader.onloadend = () => {
               props.changeAvatarImg(reader.result)
          }
          
          reader.readAsDataURL(file)

          props.disableEditMode()
     }

     return (
          <div className={s.wrapEditMode} onClick={handleClickOutside}>
               <div className={s.boxEditMode}>
                    <span
                         className={s.disableMode}
                         onClick={props.disableEditMode}
                    >&#215;</span>
                    <div className={s.text}>
                         Сменить фотографию можно здесь<br />( формат фото .png .jpg )
                    </div>

                    <form className={s.formChangePhoto} onSubmit={changePhoto}>
                         <div>
                              <input type="file" ref={newPhoto}/>
                         </div>
                         <div>
                              <button type="submit">Изменить фотографию</button>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default BoxEditMode