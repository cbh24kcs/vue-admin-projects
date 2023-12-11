import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { R } from "src/utils/R.vo";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject()
  private jwtService: JwtService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const authorization = request.header("authorization") || "";

    const bearer = authorization.split(" ");

    if (!bearer || bearer.length < 2) {
      throw new UnauthorizedException(R.error({ data: null, msg: "token无效" }));
    }

    try {
      const payload = await this.jwtService.verifyAsync(bearer[1]);
      console.log(payload);
    } catch (err) {
      console.log(err);
    }

    return false;
  }
}
