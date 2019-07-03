import request from "../request";
export function login(userName, passWord) {
  return request.post("/li", { userName, passWord });
}
