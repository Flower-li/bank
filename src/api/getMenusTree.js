import request from "../request";
export function getMenusTree() {
  return request.get("/menus/tree");
}
