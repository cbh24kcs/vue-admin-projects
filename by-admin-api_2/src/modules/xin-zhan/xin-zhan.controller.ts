import { Body, Controller, Get, Inject, Param, Post, Query, Render } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { EntityManager, Like, Repository } from "typeorm";
import { XinZhanService } from "./xin-zhan.service";
import { XZ_hnjmzyxy } from "./entities/hnjmzyxy.entity";
import { HnjmzyxyQueryDto } from "./dto/hnjmzyxy-query.dto";
import { RedisClientType } from "redis";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("吴新展")
@Controller("xz")
export class XinZhanController {
  constructor(private readonly xinZhanService: XinZhanService) {}

  @InjectEntityManager()
  private manager: EntityManager;

  @InjectRepository(XZ_hnjmzyxy)
  private hnjmzyxyRepository: Repository<XZ_hnjmzyxy>;

  @Inject("REDIS_CLIENT")
  private readonly redis: RedisClientType;

  /**
   * 分页查询文章列表
   * @param params
   */
  @Post("list")
  async list(@Body() params: HnjmzyxyQueryDto) {
    const cacheKey = `query:XZ_hnjmzyxy:${JSON.stringify(params)}`;

    const cache = JSON.parse(await this.redis.get(cacheKey));
    if (cache) {
      return {
        result: true,
        message: "操作成功",
        data: {
          list: cache.list,
          pageSize: params.pageSize,
          pageNum: params.pageNum,
          total: cache.count,
        },
      };
    }

    if (params.pageNum && params.pageSize) {
      // 查询列表
      const list = await this.hnjmzyxyRepository.find({
        // 查询条件
        where: {
          web_name: Like(`${params.web_name}`),
        },
        // 分页
        skip: (params.pageNum - 1) * params.pageSize,
        take: params.pageSize,
      });

      // 查询总数
      const count = await this.hnjmzyxyRepository.count();

      // 缓存到redis
      await this.redis.setEx(cacheKey, 30, JSON.stringify({ list, count }));

      return {
        result: true,
        message: "操作成功",
        data: {
          list: list,
          pageSize: params.pageSize,
          pageNum: params.pageNum,
          total: count,
        },
      };
    } else {
      return {
        result: true,
        data: {
          result: false,
          message: "缺少分页参数",
        },
        message: "操作成功",
      };
    }
  }

  /**
   * 查询文章详情
   * @param id
   */
  @Get(`/content/:id`)
  @Render("xin-zhan/xz-hnjmzyxy-content.hbs")
  async contentPage(@Param("id") id: number) {
    const item = this.hnjmzyxyRepository.findOne({ where: { id } });
    return item;
  }
}
