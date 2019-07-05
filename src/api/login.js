import request from "../request";
export function login(username, password) {
  return request.post("/login", { username, password });
}

// import { login } from "../api/login";
// check() {
//   login(this.username, this.password)
//     .then(rsp => {
//       var isLogin = rsp.status;
//       if (isLogin === 200) {
//         this.$router.push("index");
//       }
//     })
//     .catch(err =>{
//        alert(err.response.data.message)
//     });
// }
