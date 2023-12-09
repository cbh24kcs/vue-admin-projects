import { Body, Controller, HttpException, Inject, Logger, Post, ValidationPipe } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserLoginDto } from "./dto/login-user.dto";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";
import { R } from "src/utils/R.vo";

@Controller("user")
export class UserController {
  //研究一下Inject()内部参数写和不写有什么区别
  @Inject()
  private readonly userService: UserService;

  @Inject()
  private jwtService: JwtService;

  @Inject()
  private logger: Logger;

  @Post("/login")
  async login(@Body(ValidationPipe) params: UserLoginDto) {
    this.logger.log("logger -- log");
    this.logger.debug("logger -- debug");
    this.logger.error("logger -- error");

    try {
      const result = await this.userService.login(params);
      if (result) {
        //配置token
        const token = await this.jwtService.signAsync({ user: { id: result.id } });
        // return { code: "0", data: { token }, msg: "登录成功" };
        return R.ok({ data: token });
      }
    } catch (err) {
      return R.error({ data: err.stack, msg: err.msg });
    }
  }
}
