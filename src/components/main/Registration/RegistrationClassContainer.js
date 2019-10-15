import React from "react"
import RegistrationReduxForm from "./Registration";

export default class RegistrationClassContainer extends React.Component{
     registration = (data) => {
          this.props.registration(data)

          this.props.loginByCookieId()
     }

     render(){
          return(
               <RegistrationReduxForm 
                    onSubmit = {this.registration}
               />
          )
     }
}