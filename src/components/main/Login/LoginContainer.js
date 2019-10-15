import { connect } from "react-redux";
import LoginClassContainer from "./LoginClassContainer";
import { loginUserThunkCreator } from "../../../bll/reducers/reducerLogin";
import { compose } from "redux";
import withRedirectToLogin from "../../../HOCs/withRedirectToLogin/withRedirectToLogin";



const mapStateToProps = (state) => ({
     isLoggedIn: state.stateLoginUser.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
     loginUserThunkCreator(login, password){
          dispatch(loginUserThunkCreator(login, password))
     }
})

export default compose( 
     connect(mapStateToProps, mapDispatchToProps),
     withRedirectToLogin
)(LoginClassContainer)