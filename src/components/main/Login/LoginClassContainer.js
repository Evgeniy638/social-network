import React from "react"
import LoginReduxForm from "./Login";

export default class LoginClassContainer extends React.Component{
     getUserCookieData = (data) => {
          this.props.loginUserThunkCreator(data.login, data.password)
     }

     render(){
          return(
               <LoginReduxForm
                    onSubmit = {this.getUserCookieData}
               />
          )
     }
}