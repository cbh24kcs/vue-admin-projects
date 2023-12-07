import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";

// swagger-ui-express @nestjs/swagger nestjs-knife4j
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { knife4jSetup } from "nestjs-knife4j";
import { LoggingInterceptor } from "./common/interceptor/response.interceptor";

const host = "http://127.0.0.1";
const port = 3000;

async function bootstrap() {
  // 将类型传递给 NestFactory.create() 函数时，如下例所示，app 对象将具有专用于该特定平台的函数。
  // 注意，除非您确实要访问底层平台 API，否则无需指定类型
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // 'log', 'error', 'warn', 'debug', 'verbose'
    // logger: false, // 不使用日志
    // logger: console, // 使用JS的console对象
    // logger: new MyLogger(), // 也可以实现 LoggerService (@nestjs/common)，编写自己的日志方法
    logger: ["log", "error", "warn", "debug", "verbose"],
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

  app.useGlobalInterceptors(new LoggingInterceptor());

  await app.listen(port, () => {
    console.log(`服务启动成功, ${host}:${port}`);
  });
}

bootstrap();
