import { deleteProfileTnunkCreator, confirmDeleteProfileHide } from "../../../bll/reducers/reducerLogin";
import { connect } from "react-redux";
import DeleteProfileClassContainer from "./DeleteProfileClassContainer";


const mapStateToProps = (state) => ({
     userId: state.stateLoginUser.userId
})

const mapDispatchToProps = (dispatch) => ({
     deleteProfile(userId){
          dispatch(deleteProfileTnunkCreator(userId))
     },
     confirmDeleteProfileHide(){
          dispatch(confirmDeleteProfileHide())
     }
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProfileClassContainer)