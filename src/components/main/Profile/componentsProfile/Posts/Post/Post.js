import React from "react";
import s from "./stylePost.module.css"
import likePhoto from "../../../../../../assets/images/like.png"
import unknownAvater from "../../../../../../assets/images/avatar.png"

const Post = (props) => {
     return(
          <div className={s.post}>
               <div className={s.avatar}>
                    <img 
                         src={(props.avatarPhoto==="undefined" || props.avatarPhoto ===null) 
                              ?unknownAvater 
                              :props.avatarPhoto
                         } 
                         alt=""
                    />
               </div>
               <div>{props.message}</div>
               <span
                    className={props.isLoggedIn ?`${s.like}` :""}
                    onClick={props.isLoggedIn ?props.likePost :null}
               >
                    <img className = {s.likePhoto} src={likePhoto} alt="лайк:"/>
                    {props.countLikes}
               </span>
          </div>
     )
} 

export default Post