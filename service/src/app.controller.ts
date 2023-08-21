import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /*
      应用
      目录
      菜单s
      按钮
      功能
      接口
  */

  @Post("/menus")
  getMenus() {
    return {
      data: [
        {
          id: "1",
          title: "系统管理",
          children: [],
        },
        {
          id: "2",
        },
      ],
    };
  }
}
