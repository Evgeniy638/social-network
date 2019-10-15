import instance from "./instance";

const apiProfile = {
     getUserFromServer(id){
          return instance.get(`users/userData/${id}`)
               .then(response => {
                    return response.data
               })
     },
     posting(userId, newId, avatarPhoto, text){
          return instance.post(`posts/write/${userId}`,
          {
               id: newId,
               message: `${text}`,
               usersWhoLikes: [],
               avatarPhoto: avatarPhoto
          }).then( response=> response.data)
     },
     getUserPosts(id){
          return instance.get(`posts/read/${id}`)
               .then( response=> response.data)
     },
     changeStatus(userId, newStatus){
          return instance.put('users/status', 
               {
                    userId,
                    newStatus
               }
          ).then(response=> response.data)
     },
     changeName(userId, newName){
          return instance.put('users/name', 
               {
                    userId,
                    newName
               }
          ).then(response=> response.data)
     },
     changeSurname(userId, newSurname){
          return instance.put('users/surname', 
               {
                    userId,
                    newSurname
               }
          ).then(response=> response.data)
     },
     changeCity(userId, newCity){
          return instance.put('users/city', 
               {
                    userId,
                    newCity
               }
          ).then(response=> response.data)
     },
     changeCountry(userId, newCountry){
          return instance.put('users/country', 
               {
                    userId,
                    newCountry
               }
          ).then(response=> response.data)
     },
     createNewDialog(data){
          return instance.put("dialogs/createDialog", 
               {
                    ...data
               }
          ).then(response => response.data)
     },
     toggleLike(userId, idUserPost, idPost){
          return instance.put("posts/toggleLike",
               {
                    userId, 
                    idUserPost, 
                    idPost
               }
          ).then(response => response.data)
     },
     changeAvatarImg(userId, newPhotoAvatar){
          return instance.put("profileUser/changePhotoAvatar",
               {
                    userId,
                    newPhotoAvatar
               }
          ).then(response => response.data)
     },
     getUserPhoto(userId){
          return instance.get(`users/getUserPhoto/${userId}`)
               .then( response => response.data )
     }
}

export default apiProfile