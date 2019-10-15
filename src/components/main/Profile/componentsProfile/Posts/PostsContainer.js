import { connect } from "react-redux";  
import { getUserPostsThunkCreator, likePost } from "../../../../../bll/reducers/reducerProfile";
import {withRouter} from "react-router-dom"
import PostsClassComtainer from "./PostsClassComtainer";
import { compose } from "redux";

const mapStateToProps = state => {
     let posts = [];
     let length = state.stateProfile.dataPosts.arrayPost.length;
     for (let i = 0; i < length; i++) posts[i] = state.stateProfile.dataPosts.arrayPost[length - 1 - i]
     return {
          posts,
          userId: state.stateLoginUser.userId,
          isLoggedIn: state.stateLoginUser.isLoggedIn
     }
}

const mapDispatchToProps = dispatch => ({
     getUserPostsThunkCreator(id){
          dispatch(getUserPostsThunkCreator(id))
     },
     likePost(userId, idUserPost, idPost){
          dispatch(likePost(userId, idUserPost, idPost))
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(PostsClassComtainer)