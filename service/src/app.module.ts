import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "123456",
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
