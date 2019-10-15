import { loginByCookieIdThunkCreator } from "./reducerLogin";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

const initialState = {
     initialized: false
}

const reducerApp = (state = initialState, action) => {
     switch (action.type) {
          case INITIALIZED_SUCCESS:
               return {
                    ...state,
                    initialized: true
               }
          default:
               return state
     }
}

const initializedSuccessActionCreator = () => ({ type: INITIALIZED_SUCCESS })

export const initializeUserThunkCreator = (login, password) => dispatch => {
     let loginByCookieId = dispatch(loginByCookieIdThunkCreator())

     Promise.all([loginByCookieId]).then(() => {
          dispatch(initializedSuccessActionCreator())
     })
}

export default reducerApp