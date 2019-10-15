import Profile from "./Profile";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"

const mapStateToProps = (state) => ({
     isFetching: state.stateUsers.isFetching
})

const mapDispatchToProps = (dispatch) => ({}) 

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(Profile)