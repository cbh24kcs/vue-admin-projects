import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserLoginDto } from "./dto/login-user.dto";
import { UserRegisterDto } from "./dto/register-user.dto";
import { UserService } from "./user.service";
import { JwtService } from "@nestjs/jwt";
import { R } from "src/utils/R.vo";
import { isErrored } from "stream";
import { query } from "express";

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
    try {
      const result = await this.userService.login(params);
      if (result) {
        //配置token
        const token = await this.jwtService.signAsync({ user: { id: result.id } });
        return R.success({ data: token, msg: "登录成功" });
      }
    } catch (err) {
      // err.stact 错误堆栈
      return R.error({ data: null, msg: err.message });
    }
  }

  @Post("/register")
  async register(@Body(ValidationPipe) params: UserRegisterDto) {
    try {
      await this.userService.register(params);
      return R.success({ data: null, msg: "注册成功" });
    } catch (err) {
      return R.error({ data: null, msg: err.message });
    }
  }

  @Get("/getList")
  async getList(
    @Query("name") name: string,
    @Query("needPage", ParseIntPipe) needPage: number,
    @Query("pageNo", ParseIntPipe) pageNo: number,
    @Query("pageSize", ParseIntPipe) pageSize: number
  ) {
    console.log(pageNo);
    // try {
    //   await this.userService.findUsers(params)
    //   // return R.success({data})
    // } catch (err) {
    //   return R.error({ data: null, msg: err.message });
    // }
  }
}
