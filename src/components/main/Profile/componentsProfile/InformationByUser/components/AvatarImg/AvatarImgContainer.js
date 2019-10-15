import { getAvatarImg, getUserId } from "../../../../../../../bll/selectors";
import { compose } from "redux";
import { connect } from "react-redux";
import AvatarImg from "./AvatarImg";
import { changeAvatarImg } from "../../../../../../../bll/reducers/reducerProfile";
import { withRouter } from "react-router-dom"

const mapStateToProps = (state) => ({
     avatarImg: getAvatarImg(state),
     userId: getUserId(state)
})

const mapDispatchToProps = dispatch => ({
     changeAvatarImg(userId, newPhotoAvatar){
          dispatch(changeAvatarImg(userId, newPhotoAvatar))
     }
})

export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withRouter
)(AvatarImg)