import { connect } from "react-redux";
import { compose } from "redux";
import withRedirectToLogin from "../../../HOCs/withRedirectToLogin/withRedirectToLogin";
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => ({
     isLoggedIn: state.stateLoginUser.isLoggedIn,
     isFetching: state.stateUsers.isFetching
})

const mapDispatchToProps = (dispatch) => ({}) 

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRedirectToLogin
)(Dialogs)