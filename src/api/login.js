import request from "../request";
export function login(username, password) {
  return request.post("/login", { username, password });
}
