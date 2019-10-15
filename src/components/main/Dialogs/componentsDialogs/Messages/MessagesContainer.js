import { connect } from "react-redux";
import MessagesClassContainer from "./MessagesClassContainer";
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import { getAndShowDialogWithUser } from "../../../../../bll/reducers/reducerDialogs";

const mapStateToProps=(state)=>{
     return{
          arrayOfMessage:state.stateDialogs.arrayOfMessage,
          userId: state.stateLoginUser.userId
     }
}

const mapDispatchToProps = (dispatch) =>({
     getAndShowDialogWithUser(userId, withUserId){
          dispatch(getAndShowDialogWithUser(userId, withUserId))
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(MessagesClassContainer)