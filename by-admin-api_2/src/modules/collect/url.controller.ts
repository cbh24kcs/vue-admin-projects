import { Controller, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("URL")
@Controller("/collect")
export class UrlController {
  @ApiOperation({ summary: "新增URL" })
  @Post("/url/create")
  urlCreate() {
    return "";
  }

  @ApiOperation({ summary: "查询URL" })
  @Post("/url/retrieve")
  urlRetrieve() {
    return "";
  }

  @ApiOperation({ summary: "修改URL" })
  @Post("/url/update")
  urlUpdate() {
    return "";
  }

  @ApiOperation({ summary: "删除URL" })
  @Post("/url/delete")
  urlDelete() {
    return "";
  }
}
