import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom"
import {saveNewSurnameThunkCreator } from "../../../../../../../bll/reducers/reducerProfile";
import Surname from "./Surname";
import { getSurname, getUserId } from "../../../../../../../bll/selectors";

const mapStateToProps = (state) => ({
     surname: getSurname(state),
     userId: getUserId(state)
})

const mapDispatchToProps = (dispatch) => ({
     saveNewSurname(userId, newSurname) {
          dispatch(saveNewSurnameThunkCreator(userId, newSurname))
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(Surname)