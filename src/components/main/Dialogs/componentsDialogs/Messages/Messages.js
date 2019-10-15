import React from "react";
import Message from "./componentsMessagers/Message";
import s from "./styleMessages.module.css"

const Messages = (props) => {
     return (
          <div className={s.wrap}>
               {props.arrayOfMessage.map(
                    (item, i) => (
                         <Message
                              key={i}
                              text={item.text}
                              id={item.id}
                              userId={props.userId}
                         />
                    )
               )}
               <div ref = {props.messagesEnd}></div>
          </div>
     )
}

export default Messages;