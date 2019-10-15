import instance from "./instance";

const apiRegistration = {
     findByUserId(userId){
          return instance.get(`registration/findByUserId/${userId}`)
               .then(response => {
                    return response.data
               })
     },

     findByLogin(login){
          return instance.get(`registration/findByLogin/${login}`)
               .then(response => {
                    return response.data
               })
     },
     registration(data){
          return instance.post(`registration`, {...data})
               .then(response => {
                    return response.data
               })
     },
     deleteProfile(userId){
          return instance.delete(`registration/delete/${userId}`)
               .then(response => response.data)
     }
}

export default apiRegistration