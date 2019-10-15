import { connect } from "react-redux";
import { postingThunkCreator } from "../../../../../bll/reducers/reducerProfile";
import {withRouter} from "react-router-dom"
import NewPostClassContainer from "./NewPostClassContainer";
import { compose } from "redux";

const mapStateToProps=(state)=>{
     return{
          textPost:state.stateProfile.textPost,
          userId:state.stateLoginUser.userId,
          newId: state.stateProfile.dataPosts.arrayPost.length+1,
          avatarPhoto: state.stateProfile.userData.avatarImg
     }
}

const mapDispatchToProps=(dispatch)=>{
     return{
          postingThunkCreator(userId, newId, avatarPhoto, text){
               dispatch(postingThunkCreator(userId, newId, avatarPhoto, text))
          }
     }
}

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(NewPostClassContainer)