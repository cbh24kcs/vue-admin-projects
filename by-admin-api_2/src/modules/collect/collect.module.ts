import { Module } from "@nestjs/common";
import { UrlController } from "./url.controller";
import { CollectService } from "./collect.service";

@Module({
  imports: [],
  controllers: [UrlController],
  providers: [CollectService],
})
export class CollectModule {}
