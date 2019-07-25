import request from "../request";
export function getPermissions() {
  return request.get("/permissions");
}
