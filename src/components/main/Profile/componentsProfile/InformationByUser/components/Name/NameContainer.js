import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom"
import Name from "./Name";
import { saveNewNameThunkCreator } from "../../../../../../../bll/reducers/reducerProfile";
import { getName, getUserId } from "../../../../../../../bll/selectors";

const mapStateToProps = (state) => ({
     name: getName(state),
     userId: getUserId(state)
})

const mapDispatchToProps = (dispatch) => ({
     saveNewName(userId, newName) {
          dispatch(saveNewNameThunkCreator(userId, newName))
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(Name)