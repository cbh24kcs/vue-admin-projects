import { Body, Controller, Inject, Post, ValidationPipe } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserLoginDto } from "./dto/login-user.dto";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";

@Controller("user")
export class UserController {
  //研究一下Inject()内部参数写和不写有什么区别
  @Inject()
  private readonly userService: UserService;

  @Inject()
  private jwtService: JwtService;

  @Post("/login")
  async login(@Body(ValidationPipe) params: UserLoginDto) {
    const result = await this.userService.login(params);
    if (result) {
      //配置token
      const token = await this.jwtService.signAsync({ user: { id: result.id } });

      return { code: "0", data: { token }, msg: "登录成功" };
    }
  }
}
