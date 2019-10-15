import apiProfile from "../../api/apiProfile";
import apiDialogs from "../../api/apiDialogs";
import { showListOfDialogsActionCreator } from "./reducerDialogs";
import { setIsFetching } from "./reducerUsers";
import { loginByCookieIdThunkCreator, changeAvatarImgReducerLogin } from "./reducerLogin";

const ADD_NEW_POST="ADD-NEW-POST"
const SHOW_DATA_USER="SHOW_DATA_USER"
const SHOW_POSTS="SHOW_POSTS"
const CHANGE_STATUS="CHANGE_STATUS"
const CHANGE_NAME="CHANGE_NAME"
const CHANGE_SURNAME="CHANGE_SURNAME"
const CHANGE_CITY="CHANGE_CITY"
const CHANGE_COUNTRY="CHANGE_COUNTRY"
const CHANGE_AVATAR_IMG = "CHANGE_AVATAR_IMG"

const initialState={
     userData:{},
     dataPosts:{
          userId:undefined,
          arrayPost:[]
     }
}

const reducerProfile=(state=initialState, action)=>{
     
     switch(action.type){
          case CHANGE_AVATAR_IMG:
               return{
                    ...state,
                    userData: {
                         ...state.userData,
                         avatarImg: action.newAvatarImg
                    }
               }
          case SHOW_POSTS:
               return{
                    ...state,
                    dataPosts: action.dataPosts
               }
          case SHOW_DATA_USER:
               return{
                    ...state,
                    userData:{...action.userData}
               }
          case ADD_NEW_POST:
               return {
                    ...state,
                    dataPosts:{
                         ...state.dataPosts,
                         arrayPost:[
                              ...state.dataPosts.arrayPost, 
                              {
                                   ...action.data
                              }
                         ],     
                    }
               }
          case CHANGE_STATUS:
               return{
                    ...state,
                    userData:{
                         ...state.userData,
                         status: action.newStatus
                    }
               }
          case CHANGE_NAME:
               return{
                    ...state,
                    userData:{
                         ...state.userData,
                         name: action.newName
                    }
               }
          case CHANGE_SURNAME:
               return{
                    ...state,
                    userData:{
                         ...state.userData,
                         surname: action.newSurname
                    }
               }
          case CHANGE_COUNTRY:
               return{
                    ...state,
                    userData:{
                         ...state.userData,
                         location:{
                              ...state.userData.location,
                              country: action.newCountry
                         }
                    }
               }
          case CHANGE_CITY:
               return{
                    ...state,
                    userData:{
                         ...state.userData,
                         location:{
                              ...state.userData.location,
                              city: action.newCity
                         }
                    }
               }
          default:  return state
     }
}

export default reducerProfile;

const changeAvatarImgActionCreator = newAvatarImg => ({type: CHANGE_AVATAR_IMG, newAvatarImg})

const changeStatusActionCreator = newStatus => ({type: CHANGE_STATUS, newStatus})

const changeNameActionCreator = newName => ({type: CHANGE_NAME, newName})

const changeSurnameActionCreator = newSurname => ({type: CHANGE_SURNAME, newSurname})

const changeCityActionCreator = newCity => ({type: CHANGE_CITY, newCity})

const changeCountryActionCreator = newCountry => ({type: CHANGE_COUNTRY, newCountry})

const showPostsActionCreator= dataPosts => ({type: SHOW_POSTS, dataPosts:{...dataPosts}})

const showDataUserActionCreator= data =>({type:SHOW_DATA_USER, userData:{...data}})

const addNewPostActionCreator= data =>({ type: ADD_NEW_POST, data })

export const showDataUserThunkCreator = id => dispatch =>{
     apiProfile.getUserFromServer(id).then(data => {
          dispatch(showDataUserActionCreator(data))
     })
}

export const postingThunkCreator = (userId, newId, avatarPhoto, text) => dispatch =>{
     apiProfile.posting(userId, newId, avatarPhoto, text).then(
          data=>{
               debugger
               if (data === "error") return false
               dispatch(addNewPostActionCreator(data))
          }
     )
}

export const getUserPostsThunkCreator = (id) => dispatch =>{
     apiProfile.getUserPosts(id).then(data => {
          dispatch(showPostsActionCreator(data))
     })
}

export const saveNewStatusThunkCreator = (userId, newStatus) =>dispatch =>{
     apiProfile.changeStatus(userId, newStatus).then(
          data =>{
               dispatch(changeStatusActionCreator(data))
          }
     )
}

export const saveNewNameThunkCreator = (userId, newName) =>dispatch =>{
     apiProfile.changeName(userId, newName).then(
          data =>{
               dispatch(changeNameActionCreator(data))
               dispatch(loginByCookieIdThunkCreator())
          }
     )
}

export const saveNewSurnameThunkCreator = (userId, newSurname) =>dispatch =>{
     apiProfile.changeSurname(userId, newSurname).then(
          data =>{
               dispatch(changeSurnameActionCreator(data))
          }
     )
}

export const saveNewCityThunkCreator = (userId, newCity) =>dispatch =>{
     apiProfile.changeCity(userId, newCity).then(
          data =>{
               dispatch(changeCityActionCreator(data))
          }
     )
}

export const saveNewCountryThunkCreator = (userId, newCountry) =>dispatch =>{
     apiProfile.changeCountry(userId, newCountry).then(
          data =>{
               dispatch(changeCountryActionCreator(data))
          }
     )
}

export const createNewDialog = (data) => async (dispatch) => {
     await dispatch(setIsFetching(true))

     await apiProfile.createNewDialog(data)

     let listOfDialogs = await apiDialogs.getListDialogs(data.userId)
     await dispatch(showListOfDialogsActionCreator(listOfDialogs))

     dispatch(setIsFetching(false))

}

export const likePost  = (userId, idUserPost, idPost) => async (dispatch) => {
     
     await apiProfile.toggleLike(userId, idUserPost, idPost)

     await apiProfile.getUserPosts(idUserPost).then(data => {
          dispatch(showPostsActionCreator(data))
     })
     
}

export const changeAvatarImg = (userId, newPhotoAvatar) => async (dispatch) => {
     await apiProfile.changeAvatarImg(userId, newPhotoAvatar)
     dispatch(changeAvatarImgActionCreator(newPhotoAvatar))
     dispatch(changeAvatarImgReducerLogin(newPhotoAvatar))
}