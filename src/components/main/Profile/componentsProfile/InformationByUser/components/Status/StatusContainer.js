import { connect } from "react-redux";
import StatusClassContainer from "./StatusClassContainer";
import { saveNewStatusThunkCreator } from "../../../../../../../bll/reducers/reducerProfile";
import { compose } from "redux";
import { withRouter } from "react-router-dom"

const mapStateToProps = (state) => ({
     status: state.stateProfile.userData.status,
     userId: state.stateLoginUser.userId
})

const mapDispatchToProps = (dispatch) => ({
     saveNewStatus(userId, newStatus) {
          dispatch(saveNewStatusThunkCreator(userId, newStatus))
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(StatusClassContainer)