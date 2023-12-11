export class R {
  static success({ data, msg }: { data: any; msg?: string }) {
    return {
      code: 0,
      data,
      msg: msg || "操作成功",
    };
  }

  static error({ data, msg, code }: { data: any; msg?: string; code?: number }) {
    return {
      data,
      msg: msg || "操作失败",
      code: code || 500,
    };
  }
  
  // 函数重载写法
  //   static error(error: any, code: number, msg: string): object;
  //   static error(error: any, msg: string): object;
  //   static error(a: any, b: any, c?: any): object {
  //     let error: any;
  //     let code: number;
  //     let msg: string;
  //     if (typeof b === "number" && typeof c === "string") {
  //       [error, code, msg] = [a, b, c];
  //     } else if (typeof b === "string") {
  //       [error, code, msg] = [a, 500, b];
  //     }
  //     return { error, code, msg };
  //   }

  //   static error(...args: [any, number, string] | [any, string]) {
  //     if (args.length === 3) {
  //       const [error, code, msg] = args;
  //       return { error, code, msg };
  //     } else if (args.length === 2) {
  //       const [error, msg] = args;
  //       return { error, code: 500, msg };
  //     }
  //   }
}
