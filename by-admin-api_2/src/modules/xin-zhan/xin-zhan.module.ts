import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { XZ_hnjmzyxy } from "./entities/hnjmzyxy.entity";
import { XinZhanController } from "./xin-zhan.controller";
import { XinZhanService } from "./xin-zhan.service";
import { AppModule } from "../../app.module";

@Module({
  imports: [forwardRef(() => AppModule), TypeOrmModule.forFeature([XZ_hnjmzyxy])],
  controllers: [XinZhanController],
  providers: [XinZhanService],
})
export class XinZhanModule {}
