import { Body, Controller, Inject, Logger, Post, Render } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserLoginDto } from "./dto/login-user.dto";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";
import { log } from "console";

@Controller("user")
export class UserController {
  //研究一下Inject()内部参数写和不写有什么区别
  @Inject()
  private readonly userService: UserService;

  @Inject()
  private jwtService: JwtService;

  private log: Logger;

  @Post("/login")
  async login(@Body() params: UserLoginDto) {
    const result = await this.userService.login(params);
    if (result) {
      const token = await this.jwtService.signAsync({
        user: {
          id: result.id,
        },
      });
    }
  }
}
