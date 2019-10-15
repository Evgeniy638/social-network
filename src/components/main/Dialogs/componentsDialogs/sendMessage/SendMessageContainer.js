import {connect} from "react-redux"
import { writeAndShowNewMessage } from "../../../../../bll/reducers/reducerDialogs";
import SendMessageClassContainer from "./SendMessageClassContainer";
import { compose } from "redux";
import { withRouter } from "react-router-dom"

const mapStateToProps=(state)=>({
     userId: state.stateLoginUser.userId
})

const mapDispatchToProps=(dispatch)=>{
     return{
          writeAndShowNewMessage(userId, withUserId, message){
               dispatch(writeAndShowNewMessage(userId, withUserId, message))
          }
     }
}

export default compose(
     withRouter,
     connect(mapStateToProps, mapDispatchToProps)
)(SendMessageClassContainer);