import React from "react"
import s from "./styleUser.module.css"
import unknownAvatar from "../../../../../assets/images/avatar.png";
import { NavLink } from "react-router-dom"

const User = (props) => {
     return (
          <div className={s.wrap}>
               <NavLink
                    to={`/profile/${props.id}`}
               >
                    <img
                         src={props.avatarImg === "undefined" ? unknownAvatar : props.avatarImg}
                         alt="картинка"
                         className={s.avatar}
                    />
               </NavLink>

               <div className={s.name}>{props.name}</div>

               <div className={s.location}>
                    <div>{props.city}</div>
                    <div>{props.country}</div>
               </div>

               <div className={s.status}>{props.status}</div>

               {props.isLoggedIn

                    ? <div className={s.followed}>
                         {props.following.some(id => id === props.id)
                              ? <button
                                   onClick={() => {
                                        props.unfollowThunkCreator(props.userId, props.id)
                                   }}
                                   disabled={
                                        props.disabledButtons.some(id => id === props.id)
                                   }
                              >UNFOLLOW</button>

                              : <button
                                   onClick={() => {
                                        props.followThunkCreator(props.userId, props.id)
                                   }}
                                   disabled={
                                        props.disabledButtons.some(id => id === props.id)
                                   }
                              >FOLLOW</button>
                         }
                    </div>

                    : null
               }

          </div>
     )
}

export default User