import React from "react"
import ListOfMessagers from "./ListOfMessagers";

export default class ListOfMessagersClassContiner extends React.Component{
     componentWillMount(){
          this.props.getAndShowListOfDialogs(this.props.userId)
     }
     render(){
          return(
               <ListOfMessagers
                    {...this.props}
               />
          )
     }
}