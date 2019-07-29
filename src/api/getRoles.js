import request from "../request";
export function getRoles() {
  return request.get("/roles");
}
