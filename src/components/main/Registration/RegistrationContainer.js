import { connect } from "react-redux";
import { compose } from "redux";
import RegistrationClassContainer from "./RegistrationClassContainer";
import { registrationThunkCreator, loginByCookieIdThunkCreator } from "../../../bll/reducers/reducerLogin";

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
     registration( data ){
          dispatch(registrationThunkCreator( data ))
     },
     loginByCookieId(){
          dispatch(loginByCookieIdThunkCreator())
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
)(RegistrationClassContainer)