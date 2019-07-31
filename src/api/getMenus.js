import request from "../request";
export function getMenus() {
  return request.get("/menus");
}
