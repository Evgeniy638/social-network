import { connect } from "react-redux";
import AppClassContainer from "./AppClassContainer";
import { initializeUserThunkCreator } from "./bll/reducers/reducerApp";
import { compose } from "redux";
import { withRouter } from "react-router-dom"


const mapStateToProps = (state) => ({
     initialized: state.stateApp.initialized,
     userId: state.stateLoginUser.userId
})

const mapDispatchToProps = (dispatch) => ({
     initializeUser(){
          dispatch(initializeUserThunkCreator())
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(AppClassContainer)