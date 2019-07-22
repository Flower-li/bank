import request from "../request";
export function getDepts() {
  return request.get("/dept");
}
