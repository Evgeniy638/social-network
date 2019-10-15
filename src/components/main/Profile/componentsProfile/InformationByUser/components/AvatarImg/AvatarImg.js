import React, { useState } from "react"
import unknownAvatar from '../../../../../../../assets/images/avatar.png';
import s from "./styleAvatarImg.module.css"
import BoxEditMode from "./BoxEditMode/BoxEditMode";

const AvatarImg = React.memo((props) => {
     const [editMode, setEditMode] = useState(false)

     const disableEditMode = () => { setEditMode(false) }
     const enableEditMode = () => { setEditMode(true) }

     const changeAvatarImg = (newPhotoAvatar) => {
          props.changeAvatarImg(props.userId, newPhotoAvatar)
     }

     return (
          <>
               {
                    editMode
                         ? <BoxEditMode
                              changeAvatarImg={changeAvatarImg}
                              disableEditMode={disableEditMode}
                         />
                         : null
               }
               <div className={`${props.className} ${s.wrap}`}>
                    <img
                         className={s.avatarImg}
                         src={(props.avatarImg === undefined || props.avatarImg === "undefined")
                              ? unknownAvatar
                              : props.avatarImg
                         }
                         alt="картинка"
                    />
                    {props.userId === props.match.params.id
                         ? <div
                              className={s.changeImg}
                              onClick={enableEditMode}
                         >
                              <span>изменить картинку</span>
                         </div>

                         : null
                    }
               </div>
          </>
     )
})

export default AvatarImg