import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { generateDocument } from "./core/doc";

import { ValidationPipe } from "@nestjs/common";
import { WinstonModule } from "nest-winston";
import { winstonLogger } from "./core/logger";

import { HttpExceptionFilter } from "./common/filters/http-exception.filter";
import { configCors } from "./core/cors";
import { configMVC } from "./core/mvc";
import { expressSessionMiddleware } from "./core/session";
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from "@nestjs/platform-fastify";

const logger = WinstonModule.createLogger(winstonLogger);

async function bootstrap() {
  // const logger = new Logger();

  // 将类型传递给 NestFactory.create() 函数时，如下例所示，app 对象将具有专用于该特定平台的函数。
  // 注意，除非您确实要访问底层平台 API，否则无需指定类型
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // 'log', 'error', 'warn', 'debug', 'verbose'
    // logger: false, // 不使用日志
    // logger: console, // 使用JS的console对象
    // logger: new MyLogger(), // 也可以实现 LoggerService (@nestjs/common)，编写自己的日志方法
    // logger: ["log", "error", "warn", "debug", "verbose"],
    // winston配置
    logger,
    bufferLogs: true,
  });

  // 切换 Fastify
  // const fastifyAdapter = new FastifyAdapter();
  // const app = await NestFactory.create<NestFastifyApplication>(AppModule);

  configMVC(app);

  // 设置全局接口前缀
  // app.setGlobalPrefix("api")

  // 创建swagger文档
  generateDocument(app);

  app.use(expressSessionMiddleware);

  // 跨域相关配置
  configCors(app);

  // 注册全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter(logger)); // 全局HTTP异常过滤器

  // 注册全局管道
  app.useGlobalPipes(new ValidationPipe()); // 数据校验管道

  // 启动服务
  await app.listen(3000, () => {
    console.log(`项目运行在http:localhost:3000/`);
  });
}

bootstrap();
