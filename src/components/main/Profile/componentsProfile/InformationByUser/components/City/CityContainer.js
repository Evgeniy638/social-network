import { connect } from "react-redux";
import { compose } from "redux";
import { saveNewCityThunkCreator } from "../../../../../../../bll/reducers/reducerProfile";
import City from "./City";
import { getUserId, getCity } from "../../../../../../../bll/selectors";
import { withRouter } from "react-router-dom"

const mapStateToProps = (state) => ({
     city: getCity(state),
     userId: getUserId(state)
})

const mapDispatchToProps = (dispatch) => ({
     saveNewCity(userId, newCity) {
          dispatch(saveNewCityThunkCreator(userId, newCity))
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(City)