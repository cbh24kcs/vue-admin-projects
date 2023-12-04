import { Global, Logger, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ServeStaticModule } from "@nestjs/serve-static";
import { TypeOrmModule } from "@nestjs/typeorm";
import { createClient } from "redis";
import { TestModule } from "./modules/test/test.module";
import { UserModule } from "./modules/user/user.module";
import { XinZhanModule } from "./modules/xin-zhan/xin-zhan.module";
import { ConfigModule } from "@nestjs/config";
import { CollectModule } from "./modules/collect/collect.module";
import { serverStaticParams } from "./core/static";
import { configParams } from "./core/config";
import { typeOrmModuleOptions } from "./core/orm";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(configParams),
    ServeStaticModule.forRoot(serverStaticParams),
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    TestModule,
    UserModule,
    XinZhanModule,
    CollectModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: "REDIS_CLIENT",
      async useFactory() {
        const client = createClient({
          socket: {
            host: "wbytts.cn",
            port: 9902,
          },
          database: 6,
          password: "xd123qwe",
        });
        await client.connect();
        return client;
      },
    },
    Logger,
  ],
  exports: ["REDIS_CLIENT", Logger],
})
export class AppModule {}
