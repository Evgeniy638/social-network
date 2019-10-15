import usersApi from "../../api/apiUser";

const initialState = {
     users: [],
     following: [],
     currentPage:1,
     pageSize:4,
     numberOfPages:undefined,
     isFetching: false,
     disabledButtons:[]
}

const SET_IS_FETCHING= "SET_IS_FETCHING"
const SHOW_MORE_USERS = "SHOW_MORE_USERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const DELETE_DATA_ABOUT_USERS="DELETE_DATA_ABOUT_USERS"
const OPEN_NEW_PAGE="OPEN_NEW_PAGE"
const TOGGLE_DISABLED_BUTTON="TOGGLE_DISABLED_BUTTON"
const GET_FOLLOWING_TO_STATE = "GET_FOLLOWING_TO_STATE"

const reduserUsers = (state = initialState, action) => {
     switch (action.type) {
          case TOGGLE_DISABLED_BUTTON:
               return{
                    ...state,
                    disabledButtons: 
                         action.isDisabled
                              ?[
                                   ...state.disabledButtons,
                                   action.id
                              ]
                              :state.disabledButtons.filter((id)=>{
                                   return id !== action.id
                              })
               }
          case SET_IS_FETCHING:
               return{
                    ...state,
                    isFetching: action.isFetching
               }
          case SHOW_MORE_USERS:
               return {
                    ...state,
                    users: [
                         ...action.newData.pageData
                    ],
                    numberOfPages:action.newData.numberOfPages,
               }
          case GET_FOLLOWING_TO_STATE:
               return{
                    ...state,
                    following: action.following
               }
          case OPEN_NEW_PAGE:
               return{
                    ...state,
                    currentPage: action.page
               }
          case DELETE_DATA_ABOUT_USERS:
                    return {
                         ...state,
                         users: [],
                    }
          case FOLLOW:
               return {
                    ...state,
                    following:[
                         ...state.following,
                         action.id
                    ]
               }
          case UNFOLLOW:
               return {
                    ...state,
                    following: state.following.filter( id=>  id !== action.id)
               }
          default: return state
     }
}

const getFollowingToStateActionCreator = (following) => ({type: GET_FOLLOWING_TO_STATE, following})

const isDisabledButtonActionCreator = (id, isDisabled) => ({type: TOGGLE_DISABLED_BUTTON, id, isDisabled})

export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING,isFetching})

const openNewPageACtionCreator = (page) => ({type:OPEN_NEW_PAGE, page})

export const deleteDataAboutUSersActionCreator = () => ({type:DELETE_DATA_ABOUT_USERS})

const showMoreUsersActionCreator = (newData) => ({ type: SHOW_MORE_USERS, newData})

const followActionCreator = (id) => ({ type: FOLLOW, id: id })

const unfollowActionCreator = (id) => ({ type: UNFOLLOW, id: id })

export const getUsersThunkCreator = (pageSize, newPage, userId) =>{
     return async (dispatch) => {
          
          await dispatch(setIsFetching(true))

          await usersApi.getUsers(pageSize, newPage).then(
               data => {
                    dispatch(showMoreUsersActionCreator(data))
               }
          )

          if (userId !== undefined && userId !== null){
               await usersApi.getFollowing(userId).then(
                    data => {
                         dispatch(getFollowingToStateActionCreator(data))
                    }
               )
          }
          
          await dispatch(openNewPageACtionCreator(newPage))
                    
          await dispatch(setIsFetching(false))
          
     }
}

export const followThunkCreator = (userId, followingId) =>{
     return (dispatch) => {
          if (userId === undefined || userId === null){
               alert("авторизируйтесь")
               return false
          }

          dispatch(isDisabledButtonActionCreator(followingId, true))

          usersApi.followBack(userId, followingId).then(() => {
               dispatch(followActionCreator(followingId))
               dispatch(isDisabledButtonActionCreator(followingId, false))
          })
     }
}

export const unfollowThunkCreator = (userId, unfollowingId) =>{
     return (dispatch) => {
          if (userId === undefined || userId === null){
               alert("авторизируйтесь")
               return false
          }

          dispatch(isDisabledButtonActionCreator(unfollowingId, true))

          usersApi.unfollowBack(userId, unfollowingId).then(() => {
               dispatch(unfollowActionCreator(unfollowingId))
               dispatch(isDisabledButtonActionCreator(unfollowingId, false))
          })
     }
}

export default reduserUsers