import React from "react";
import s from "./styleDialogs.module.css"
import ListOfMessagersContainer from "./componentsDialogs/ListOfMessagers/ListOfMessagersContainer";
import SendMessageContainer from "./componentsDialogs/sendMessage/SendMessageContainer";
import MessagesContainer from "./componentsDialogs/Messages/MessagesContainer";
import { Route } from "react-router-dom";
import Loader from "../../../assets/components/Loader/Loader"

const Dialogs=(props)=>{
     return(
          <div className={s.wrap}>
               {props.isFetching ?<Loader/> :null}
               <Route path="/dialogs" render={()=><ListOfMessagersContainer/> }/>
               <Route path="/dialogs/:withUserId" render={()=><MessagesContainer/> }/>
               <Route path="/dialogs/:withUserId" render={()=><SendMessageContainer/> }/>
          </div>
     )
}

export default Dialogs