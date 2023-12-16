import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";

import { BusinessErrorException } from "../exception/business-error.excpetion";

@Catch(BusinessErrorException)
export class BusinessErrorExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost): any {
    
    const ctx = host.switchToHttp();

    // 拿到响应和请求对象
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    
    // const status = exception.getStatus();
    const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    // 记录日志
    // this.logger.error(JSON.stringify(exception));

    // 响应错误信息
    response.status(200).json({
      code: 400,
      msg: exception.getResponse(),
      data: null,
    });
  }
}
