import { connect } from "react-redux";
import InfByUserClassContainer from "./InfByUserClassContainer";
import { withRouter } from "react-router-dom"
import { showDataUserThunkCreator, createNewDialog } from "../../../../../bll/reducers/reducerProfile";
import { compose } from "redux";


const mapStateToProps=(state)=>({
     userData:state.stateProfile.userData,
     userId: state.stateLoginUser.userId
})

const mapDispatchToProps=(dispatch)=>({
     showDataUserThunkCreator(id){
          dispatch(showDataUserThunkCreator(id))
     },
     createNewDialog(data){
          dispatch(createNewDialog(data))
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(InfByUserClassContainer)