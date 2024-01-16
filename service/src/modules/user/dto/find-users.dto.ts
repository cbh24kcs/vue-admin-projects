import { PartialType } from "@nestjs/mapped-types";
import { isString } from "class-validator";
import { PagingDto } from "src/common/dto/paging.dto";

export class FindUsersDto extends PartialType(PagingDto) {
  name: string;
}
