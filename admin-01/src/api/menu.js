import service from "@/utils/request";

export function queryAllMenu() {
  return service.get("/menu/queryAll");
}

export function deleteMenuById(id) {
  return service.post("/menu/deleteById", { id });
}

export function addMenu(params) {
  return service.post("/menu/addMenu", params);
}
