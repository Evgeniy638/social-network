import React from "react";
import s from "./styleListOfMessagers.module.css"
import {NavLink, Redirect} from "react-router-dom";

const ListOfMessagers=(props)=>{
     if (props.arrayOfListDialogs.length === 0){
          return(
               <div className={s.noDialogs}>
                    У вас нет диалогов
               </div>
          )
     }

     return(
          <div className={s.wrap}>
               {props.arrayOfListDialogs.map( (item, i)=> 
                    <div key={item.withUserId}>
                         {(i === 0) && props.location.pathname === "/dialogs"
                              ?<Redirect to={`/dialogs/${item.withUserId}`} />
                              :<></>
                         }
                         <NavLink
                              onClick={()=>{props.getAndShowDialogWithUser(props.userId ,item.withUserId)}}
                              to={`/dialogs/${item.withUserId}`} 
                              activeClassName={s.active}
                         >
                              {item.withUserName}
                         </NavLink>
                    </div>)
               }
          </div>
     )
}

export default ListOfMessagers;