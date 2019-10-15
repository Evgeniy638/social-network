import React from "react";
import s from "./styleMessage.module.css";

const Message=(props)=>{
     return(
          <div 
               className={(props.id === props.userId)  
                    ?s.wrapMessageThisUser
                    :s.wrapMessageOtherUser}
          >
               <span 
                    className={`${s.message} ${(props.id === props.userId)
                         ?s.thisUser
                         :s.otherUser}`}
               >{props.text}</span>
          </div>
     )
}

export default Message;