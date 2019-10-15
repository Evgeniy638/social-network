import instance from "./instance";

const apiDialogs = {
     getListDialogs(userId){
          return instance.get(`dialogs/listDialogs/${userId}`)
               .then(response => response.data)
     },
     getDialogWithUser(userId, withUserId){
          return instance.get(`dialogs/dialog?userId=${userId}&withUserId=${withUserId}`)
               .then(response => response.data)
     },
     sendNewMessage(userId, withUserId, message){
          return instance.post("dialogs/sendMessage",
               {
                    userId, withUserId, message
               }
          ).then(response => response.data)
     },
     getIsDeleteThisProfile(withUserId){
          return instance.get(`dialogs/isDeleteThisProfile/${withUserId}`)
               .then(response => response.data)
     }
}

export default apiDialogs