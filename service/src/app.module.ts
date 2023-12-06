import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./modules/user/user.module";
import { MenuModule } from "./modules/menu/menu.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "47.102.134.16",
      port: 9898,
      username: "root",
      password: "root",
      database: "admin",
      synchronize: false, // 数据库同步
      logging: true, // 打印日志
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      poolSize: 10,
      connectorPackage: "mysql2",
      extra: {
        authPlugin: "sha256_password",
        idleTimeoutMillis: 30 * 1000,
      },
    }),
    JwtModule.register({
      global: true, //全局模块
      secret: "dpx_cbh24kcs_demo", // 密钥
      signOptions: {
        expiresIn: "7d", // token有效期
      },
    }),
    UserModule,
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
