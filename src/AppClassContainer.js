import React from "react"
import App from "./App";

export default class AppClassContainer extends React.Component{
     componentWillMount(){
          this.props.initializeUser()
     }

     render(){
          return(
               <App {...this.props}/>
          )
     }
}