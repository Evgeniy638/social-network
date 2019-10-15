import { connect } from "react-redux";
import MyHeaderClassContainer from './MyHeaderClassContainer';
import { logoutThunkCreator, confirmDeleteProfileShow } from "../../bll/reducers/reducerLogin";
import { getIsLoggedIn, getAvatarImgLoginUser } from "../../bll/selectors";

let mapStateToProps = (state) => ({
     userName: state.stateLoginUser.name,
     userId: state.stateLoginUser.userId,
     isLoggedIn: getIsLoggedIn(state),
     confirmDeleteProfile: state.stateLoginUser.confirmDeleteProfile,
     avatarImg: getAvatarImgLoginUser(state)
})

let mapDispatchToProps = (dispatch) => ({
     logout(){
          dispatch(logoutThunkCreator())
     },
     confirmDeleteProfileShow(){
          dispatch(confirmDeleteProfileShow())
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(MyHeaderClassContainer)