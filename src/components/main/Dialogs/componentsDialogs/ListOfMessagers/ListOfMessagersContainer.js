import { connect } from "react-redux";
import { getAndShowListOfDialogs, getAndShowDialogWithUser } from "../../../../../bll/reducers/reducerDialogs";
import ListOfMessagersClassContiner from "./ListOfMessagersClassContiner";
import { compose } from "redux"
import { withRouter } from "react-router-dom"

const mapStateToProps=(state)=>{
     return{
          arrayOfListDialogs: state.stateDialogs.arrayOfListDialogs,
          userId: state.stateLoginUser.userId
     }
}

const mapDispatchToProps = (dispatch) => ({
     getAndShowListOfDialogs(userId){
          dispatch(getAndShowListOfDialogs(userId))
     },
     getAndShowDialogWithUser(userId, withUserId){
          dispatch(getAndShowDialogWithUser(userId, withUserId))
     }
}) 

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(ListOfMessagersClassContiner)