import reducerProfile from "./reducerProfile";
import reducerDialogs from "./reducerDialogs";
import reducerSlidebar from "./reducerSlidebar";

let store={
     _state:{
          stateProfile:{
               arrayPost:[
                    {id: 1, message:"привет", like:"3"},
                    {id: 2, message:"чего не здороваешься?", like:""},
                    {id: 3, message:"чего не здороваешься?", like:""},
                    {id: 4, message:"чего не здороваешься?", like:""},
                    {id: 5, message:"чего не здороваешься?", like:""},
               ],
               textPost:"",
          },
          stateSlidebar:{
               arrayMenu:[
                    {id:"profile", text:"Profile"},
                    {id:"dialogs", text:"Dialogs"},
                    {id:"friends", text:"Friends"},
                    {id:"musics", text:"Musics"},
                    {id:"photos", text:"Photos"},
                    {id:"games", text:"Games"}
               ],
          },
          stateDialogs:{
               arrayOfListDialogs:[
                    {id:"1", name:"Акоп"},
                    {id:"2", name:"Айк"},
                    {id:"3", name:"Эрмине"},
                    {id:"4", name:"Андрей"},
                    {id:"5", name:"Егор"},
               ],
               arrayOfMessage:[
                    {id: 1, message:"Привет"},
                    {id: 2, message:"Как дела?"},
                    {id: 3, message:"Удачи"},
                    {id: 4, message:"Хорошего дня"},
                    {id: 5, message:"Пока"},
               ],
               newMessage:""
          },
     },
     getState(){
          return this._state
     },
     reRender:undefined,
     subscribe(func){
          this.reRender=func
     },
     dispatch(action){//action={type:"titleOfAction", ...other}
          this._state.stateProfile=reducerProfile(this._state.stateProfile, action)
          this._state.stateDialogs=reducerDialogs(this._state.stateDialogs, action)
          this._state.stateSlidebar=reducerSlidebar(this._state.stateSlidebar, action)

          this.reRender()
     },
}

export default store;