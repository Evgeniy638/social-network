import instance from "./instance";

const loginApi = {
     loginByPasswordAndLogin(login, password){
          return instance.post("login/loginByPasswordAndLogin", {
               login, password
          })
               .then(response=> response.data)
     },
     loginByCookieId(){
          return instance.get("login/loginByCookie")
               .then(response=> response.data)
     },
     logout(){
          return instance.delete("login/logout")
               .then(response=> response.data)
     }
}

export default loginApi