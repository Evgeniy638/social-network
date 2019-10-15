import reducerDialogs from "./reducers/reducerDialogs"
import reducerProfile from "./reducers/reducerProfile"
import reducerSlidebar from "./reducers/reducerSlidebar"
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduserUsers from "./reducers/reducerUsers";
import reducerLogin from "./reducers/reducerLogin";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import reducerApp from "./reducers/reducerApp";

const reducer = combineReducers({
     stateDialogs:reducerDialogs,
     stateProfile:reducerProfile,
     stateSlidebar:reducerSlidebar,
     stateUsers:reduserUsers,
     stateLoginUser: reducerLogin,
     stateApp: reducerApp,
     form: formReducer
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

window.store=store

export default store