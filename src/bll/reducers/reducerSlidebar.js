const initialState={
     arrayMenu:[
          {id:"profile", text:"Профиль"},
          {id:"dialogs", text:"Диалоги"},
          {id:"friends", text:"Друзья"},
          {id:"musics", text:"Музыка"},
          {id:"photos", text:"Фото"},
          {id:"games", text:"Игры"},
          {id:"users", text:"Пользователи"}
     ],
}

const reducerSlidebar=(state=initialState, action)=>{
     // let newState={...state}
     return state
}

export default reducerSlidebar;