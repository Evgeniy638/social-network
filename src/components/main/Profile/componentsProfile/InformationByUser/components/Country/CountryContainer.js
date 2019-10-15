import { connect } from "react-redux";
import { compose } from "redux";
import Country from "./Country";
import { saveNewCountryThunkCreator } from "../../../../../../../bll/reducers/reducerProfile";
import { getUserId, getCountry } from "../../../../../../../bll/selectors";
import { withRouter } from "react-router-dom"

const mapStateToProps = (state) => ({
     country: getCountry(state),
     userId: getUserId(state)
})

const mapDispatchToProps = (dispatch) => ({
     saveNewCountry(userId, newCountry) {
          dispatch(saveNewCountryThunkCreator(userId, newCountry))
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(Country)