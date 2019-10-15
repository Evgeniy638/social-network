import React from 'react'
import s from "./styleHeader.module.css"
import { NavLink } from "react-router-dom";
import DeleteProfileContainer from './ProfileDeletionConfirmation/DeleteProfileContainer';
import unknownAvatar from '../../assets/images/avatar.png';

function MyHeader(props) {
     return (
          <>
               {props.isConfirmDeleteProfile
                    ? <DeleteProfileContainer/>
                    : null
               }

               <div className={s.wrap}>
                    {props.isLoggedIn
                         ? <>
                              <img
                                   src={(props.avatarImg === undefined || props.avatarImg === "undefined") 
                                        ? unknownAvatar 
                                        : props.avatarImg
                                   }
                                   alt="картинка"
                                   className={s.avatar}
                                   onClick={
                                        () => {
                                             return !props.displayMenu
                                                  ? props.openMenu()
                                                  : props.closeMenu()
                                        }
                                   }
                              />

                              <div className={s.userName}>
                                   <span
                                        onClick={
                                             () => {
                                                  return !props.displayMenu
                                                       ? props.openMenu()
                                                       : props.closeMenu()
                                             }
                                        }
                                   >{props.userName} &#9776;</span>
                              </div>

                              {props.displayMenu
                                   ? <div
                                        ref={props.menu}
                                        className={s.menu}
                                        style={props.displayMenu
                                             ? { display: "block" }
                                             : { display: "none" }
                                        }
                                   >
                                        <div onClick={props.confirmDeleteProfileShow}>Удалить профиль</div>
                                        <div onClick={props.logout}>Выйти</div>
                                   </div>
                                   : null
                              }
                         </>

                         : <div className={s.enter}>
                              <NavLink to="/login">Войти</NavLink>
                         </div>
                    }
               </div>
          </>
     );
}

export default MyHeader;