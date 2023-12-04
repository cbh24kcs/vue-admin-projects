import { Global, Module, forwardRef } from "@nestjs/common";
import { TestController } from "./test.controller";
import { TestService } from "./test.service";
import { AppModule } from "src/app.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Test } from "./entities/test.entity";

// @Global() // 可以把模块声明为全局的，这样在没有导入的地方也可以使用
@Module({
  imports: [forwardRef(() => AppModule), TypeOrmModule.forFeature([Test])],
  controllers: [TestController],
  providers: [
    {
      provide: TestService,
      useClass: TestService,
    },
    {
      provide: "person",
      useValue: {
        name: "张三",
        age: 18,
      },
    },
    // provider 的值可能是动态产生的，Nest也同样支持
    {
      provide: "person2",
      // useFactory 支持异步
      useFactory() {
        return {
          name: "李四",
          age: 19,
        };
      },
    },
  ],
})
export class TestModule {}
