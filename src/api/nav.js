import request from "../request";
export function getNav() {
  return request.post("/nav");
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
