import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationError, ValidationPipe } from "@nestjs/common";
import { WinstonLogger, WinstonModule } from "nest-winston";

import { AppModule } from "./app.module";
import { AuthGuard } from "./common/guard/auth.guard";
import { BusinessExceptionFilter } from "./common/filter/business-excpetion.filter";
import { CustomValidationException } from "./common/exception/custom-validation.exception";
import { CustomValidationExceptionFilter } from "./common/filter/custom-validation.filter";
import { JwtService } from "@nestjs/jwt";
import { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { join } from "path";
import { knife4jSetup } from "nestjs-knife4j";
import { winstonLogger } from "./core/logger";

// swagger-ui-express @nestjs/swagger nestjs-knife4j

const host = "http://127.0.0.1";
const port = 3000;

const logger = WinstonModule.createLogger(winstonLogger);

async function bootstrap() {
  // 将类型传递给 NestFactory.create() 函数时，如下例所示，app 对象将具有专用于该特定平台的函数。
  // 注意，除非您确实要访问底层平台 API，否则无需指定类型
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // 'log', 'error', 'warn', 'debug', 'verbose'
    // logger: false, // 不使用日志
    // logger: console, // 使用JS的console对象
    // logger: new MyLogger(), // 也可以实现 LoggerService (@nestjs/common)，编写自己的日志方法
    // logger: ["log", "error", "warn", "debug", "verbose"],
    logger,
  });

  // 设置静态资源路径
  app.useStaticAssets(join(__dirname, "..", "public"));
  // 设置基础视图目录
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  // 设置视图的模板引擎
  app.setViewEngine("hbs");

  // 设置全局接口前缀
  // app.setGlobalPrefix("api")

  const options = new DocumentBuilder()
    .setTitle("CBH ADMIN")
    .setDescription("The cbh API description")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

  knife4jSetup(app, {
    urls: [
      {
        name: "V0.1 版本",
        url: `/api-json`,
        swaggerVersion: "3.0",
        location: `/api-json`,
      },
    ],
  });

  //数据校验管道
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[] = []) => {
        return new CustomValidationException(
          errors.map(item => {
            let name = item.property;
            let value = item.value;
            let constraintsStr = Object.values(item.constraints).join(",");
            return { name, value, msg: constraintsStr };
          })
        );
      },
    })
  );

  // app.useGlobalGuards(new AuthGuard())

  app.useGlobalFilters(new CustomValidationExceptionFilter(logger));

  app.useGlobalFilters(new BusinessExceptionFilter());

  await app.listen(port, () => {
    console.log(`服务启动成功, ${host}:${port}`);
  });
}

bootstrap();
