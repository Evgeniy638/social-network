import { connect } from "react-redux";
import { getUsersThunkCreator, deleteDataAboutUSersActionCreator, followThunkCreator, unfollowThunkCreator } from "../../../bll/reducers/reducerUsers";
import UsersClassContainer from "./UsersClassContainer";
import { compose } from "redux";


const mapStateToProps=(state)=>{
     return{
          currentPage:state.stateUsers.currentPage,
          numberOfPages:state.stateUsers.numberOfPages,
          users:state.stateUsers.users,
          pageSize:state.stateUsers.pageSize,
          isFetching: state.stateUsers.isFetching,
          disabledButtons: state.stateUsers.disabledButtons,
          userId: state.stateLoginUser.userId,
          following: state.stateUsers.following,
          isLoggedIn: state.stateLoginUser.isLoggedIn
     }
}

const mapDispatchToProps=(dispatch)=>{
     return{
          deleteDataAboutUSers(){
               dispatch(deleteDataAboutUSersActionCreator())
          },
          getUsersThunkCreator(pageSize, newPage, userId){
               dispatch(getUsersThunkCreator(pageSize, newPage, userId))
          },
          followThunkCreator(userId, followingId){
               dispatch(followThunkCreator(userId, followingId))
          },
          unfollowThunkCreator(userId, unfollowingId){
               dispatch(unfollowThunkCreator(userId, unfollowingId))
          }
     }
}

export default compose(
     connect(mapStateToProps, mapDispatchToProps)
)(UsersClassContainer)