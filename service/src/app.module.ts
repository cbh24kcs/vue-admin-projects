import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModule} from "./user/user.module";
import {MenuModule} from "./menu/menu.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "wbytts.e3.luyouxia.net",
      port: 10396,
      username: "root",
      password: "root",
      database: "cbh-admin",
      synchronize: true, // 同步
      logging: true, // 打印日志
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      poolSize: 10,
      connectorPackage: "mysql2",
      extra: {
        authPlugin: "sha256_password",
        idleTimeoutMillis: 30 * 1000,
      },
    }),
    UserModule,
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
