import apiDialogs from "../../api/apiDialogs";
import { setIsFetching } from "./reducerUsers";

const WRITE_NEW_MESSAGE="WRITE_NEW_MESSAGE"
const SHOW_LIST_OF_DIALOGS = "SHOW_LIST_OF_DIALOGS"
const SHOW_DIALOG_WITH_USER = "SHOW_DIALOG_WITH_USER"

const initialState={
     arrayOfListDialogs:[],
     arrayOfMessage:[]
}

const reducerDialogs=(state=initialState, action)=>{
     switch(action.type){
          case WRITE_NEW_MESSAGE:
               return {
                    ...state,
                    arrayOfMessage:[
                         ...state.arrayOfMessage,
                         {
                              id: action.message.userId,
                              text: action.message.text
                         }
                    ]
               }
          case SHOW_LIST_OF_DIALOGS:
               return{
                    ...state,
                    arrayOfListDialogs:[
                         ...action.arrayOfListDialogs
                    ]
               }
          case SHOW_DIALOG_WITH_USER:
               return{
                    ...state,
                    arrayOfMessage:[
                         ...action.arrayOfMessage
                    ]
               }
          default: return state
     }
}

export default reducerDialogs;

export const writeNewMessageactionCreator=(message)=>({type: WRITE_NEW_MESSAGE, message})

export const showListOfDialogsActionCreator = (arrayOfListDialogs) => ({type: SHOW_LIST_OF_DIALOGS, arrayOfListDialogs})

export const showDialogWihUser = (arrayOfMessage) => ({type: SHOW_DIALOG_WITH_USER, arrayOfMessage})

export const writeAndShowNewMessage = (userId, withUserId, message) => dispatch => {
     apiDialogs.sendNewMessage(userId, withUserId, message)
          .then( () =>{
               dispatch(writeNewMessageactionCreator(message))
          })
}

export const getAndShowListOfDialogs = (userId) => dispatch =>{
     apiDialogs.getListDialogs(userId)
          .then(data => {
               dispatch(showListOfDialogsActionCreator(data))
          })
}

export const getAndShowDialogWithUser = (userId, withUserId) => (dispatch) =>{
     dispatch(setIsFetching(true))

     apiDialogs.getDialogWithUser(userId, withUserId)
          .then(data => {
               dispatch(showDialogWihUser(data))
               dispatch(setIsFetching(false))
          })
}