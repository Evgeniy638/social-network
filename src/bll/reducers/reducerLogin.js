import loginApi from "../../api/apiLogin";
import apiRegistration from "../../api/apiRegistration";
import { stopSubmit } from "redux-form"
import apiProfile from "../../api/apiProfile";

const LOGIN_USER = "LOGIN_USER"
const CLEAR_DATA_ABOUT_USER = "CLEAR_DATA_ABOUT_USER"
const DELETE_PROFILE = "DELETE_PROFILE"
const CONFIRM_DELETE_PROFILE_SHOW = "CONFIRM_DELETE_PROFILE_SHOW"
const CONFIRM_DELETE_PROFILE_HIDE = "CONFIRM_DELETE_PROFILE_HIDE"
const CHANGE_AVATAR_IMG_REDUCER_LOGIN = "CHANGE_AVATAR_IMG_REDUCER_LOGIN"

const initialState = {
     userId: undefined,
     login: undefined,
     password: undefined,
     name: undefined,
     isLoggedIn: false,
     confirmDeleteProfile: false,
     avatarImg: undefined
}

const reducerLogin = (state = initialState, action) => {
     switch (action.type) {
          case CHANGE_AVATAR_IMG_REDUCER_LOGIN:{
               return {
                    ...state,
                    avatarImg: action.avatarImg
               }
          }
          case LOGIN_USER:
               return {
                    ...state,
                    userId: `${action.data.userId}`,
                    password: action.data.password,
                    login: action.data.login,
                    name: action.data.name,
                    avatarImg: action.data.avatarImg,
                    isLoggedIn: true
               }
          case CLEAR_DATA_ABOUT_USER:
               return {
                    ...state,
                    userId: undefined,
                    login: undefined,
                    password: undefined,
                    name: undefined,
                    isLoggedIn: false
               }
          case DELETE_PROFILE:
               return {
                    userId: undefined,
                    login: undefined,
                    password: undefined,
                    name: undefined,
                    isLoggedIn: false,
                    errorMessage: undefined
               }
          case CONFIRM_DELETE_PROFILE_SHOW:
               return {
                    ...state,
                    confirmDeleteProfile: true
               }
          case CONFIRM_DELETE_PROFILE_HIDE:
               return {
                    ...state,
                    confirmDeleteProfile: false
               }
          default:
               return state
     }
}

export const changeAvatarImgReducerLogin = (avatarImg) => ({ type: CHANGE_AVATAR_IMG_REDUCER_LOGIN, avatarImg })

const loginUserActionCreator = (data) => ({ type: LOGIN_USER, data })

const logoutActionCreator = () => ({ type: CLEAR_DATA_ABOUT_USER })

const deleteProfileActionCreator = () => ({ type: DELETE_PROFILE })

export const confirmDeleteProfileShow = () => ({ type: CONFIRM_DELETE_PROFILE_SHOW })

export const confirmDeleteProfileHide = () => ({ type: CONFIRM_DELETE_PROFILE_HIDE })

export const loginUserThunkCreator = (login, password) => async (dispatch) => {
     let data = await loginApi.loginByPasswordAndLogin(login, password)
     
     if (data.error) {
          dispatch(stopSubmit("Login", { _error: data.message }))
     } else {
          let data = await loginApi.loginByCookieId()
     
          if (data === "error") return false
          
          let avatarImg = await apiProfile.getUserPhoto(data.userId)

          data.avatarImg = avatarImg

          dispatch(loginUserActionCreator(data))
     }
}


export const loginByCookieIdThunkCreator = () => async (dispatch) => {
     let data = await loginApi.loginByCookieId()
     
     if (data === "error") return false
     
     let avatarImg = await apiProfile.getUserPhoto(data.userId)

     data.avatarImg = avatarImg

     dispatch(loginUserActionCreator(data))
}


export const logoutThunkCreator = () => {
     return (dispatch) => {
          loginApi.logout().then(
               data => {
                    dispatch(logoutActionCreator())
               }
          )
     }
}

export const registrationThunkCreator = (data) => dispatch => {
     apiRegistration.registration(data).then(
          data => {
               if (data.error) {
                    dispatch(stopSubmit("Registration", { _error: data.message }))
               } else {
                    dispatch(loginUserActionCreator(data))
               }
          }
     )
}

export const deleteProfileTnunkCreator = (userId) => dispatch => {
     apiRegistration.deleteProfile(userId)
          .then(() => {
               dispatch(deleteProfileActionCreator())
               dispatch(confirmDeleteProfileHide())
          })
}

export default reducerLogin