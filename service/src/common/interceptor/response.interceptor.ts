import { CallHandler, ExecutionContext, Injectable, LoggerService, NestInterceptor } from "@nestjs/common";
import { Response } from "express";
import { map, mergeScan, Observable } from "rxjs";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {

  constructor(private logger: LoggerService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before...");
    const now = Date.now();
    return next.handle();
  }
}

/*
code 200
data xxx
msg 成功


*/
