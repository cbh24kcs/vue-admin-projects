import { loginParams } from "./type/userType"
import request from "@/utils/request"

const api = {
  login: "/login",
  userList: "/user/list"
}

export function login(params: loginParams) {
  return request.post(api.login, params )
}
