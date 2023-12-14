import { Inject, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

import { BusinessErrorException } from "src/common/exception/business-error.excpetion";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class jwtMiddleware implements NestMiddleware {
  @Inject()
  private jwtService: JwtService;

  async use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.header("authorization") || "";

    const bearer = authorization.split(" ");

    if (!bearer || bearer.length < 2) {
      throw new BusinessErrorException("登录token错误");
    }

    const token = bearer[1]
    try {
      const payload = await this.jwtService.verifyAsync(token);
      console.log("--------.",payload);
      
    } catch (err) {
      console.log(err)
      throw new BusinessErrorException("无效令牌，请重新登陆")
    }
    next()
  }
}
