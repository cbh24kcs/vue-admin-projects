import * as crypto from "crypto"; //node内置加密模块

//加密工具函数
export function md5(str: string) {
  const hash = crypto.createHash("md5").update(str).digest("hex");
  return hash;
}
