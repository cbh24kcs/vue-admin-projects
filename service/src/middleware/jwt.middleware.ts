import { Inject, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

import { BusinessException } from "src/common/exception/business-error.excpetion";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class jwtMiddleware implements NestMiddleware {
  @Inject()
  private jwtService: JwtService;

  async use(req: Request, res: Response, next: NextFunction) {
    const authorization = req.header("authorization") || "";

    const bearer = authorization.split(" ");

    if (!bearer || bearer.length < 2) {
      throw new BusinessException("登录token错误");
    }

    const token = bearer[1];
    try {
      //数据后面再塞到上下文
      const payload = await this.jwtService.verifyAsync(token);
    } catch (err) {
      throw new BusinessException("无效令牌，请重新登陆");
    }
    next();
  }
}
