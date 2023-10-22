import {Controller, Post, Body} from "@nestjs/common"
import {MenuService} from "./menu.service";
import {testDto} from "./dto/test.dto";

@Controller("menu")
export class MenuController {
  constructor(private readonly menuService: MenuService) {
  }

  @Post('list')
  getMenuList(@Body() user: testDto) {
      console.log(user)
  }
}
