import instance from "./instance";

const usersApi = {
     getUsers(pageSize, newPage) {
          return instance.get(`users/read?pageSize=${pageSize}&numberPage=${newPage}`)
               .then(response => response.data)
     },
     followBack(userId, followingId) {
          return instance.post(`users/follow`,{
               userId, followingId
          })
               .then(response => response.data)
     },
     unfollowBack(userId, unfollowingId) {
          return instance.delete(`users/follow?userId=${userId}&unfollowingId=${unfollowingId}`)
               .then(response => {return response.data})
     },
     getFollowing(userId){
          return instance.get(`users/follow?userId=${userId}`)
               .then(response => {return response.data})
     }
}

export default usersApi