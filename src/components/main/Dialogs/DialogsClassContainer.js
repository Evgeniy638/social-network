import React from "react"
import Dialogs from "./Dialogs";

export default class DialogsClassContainer extends React.Component{
     componentWillMount(){
          this.props.getAndShowListOfDialogs(this.props.userId)
     }
     render(){
          return(
               <Dialogs
                    {...this.props}
               />
          )
     }
}