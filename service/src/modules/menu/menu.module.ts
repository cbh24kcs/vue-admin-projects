import {Module} from "@nestjs/common"
import {TypeOrmModule} from "@nestjs/typeorm";
import {MenuController} from "./menu.controller";
import {MenuService} from "./menu.service";


@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {
}