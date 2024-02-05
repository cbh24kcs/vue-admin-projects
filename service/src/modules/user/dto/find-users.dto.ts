import { PartialType } from "@nestjs/mapped-types";
import { isString } from "class-validator";
import { Pagination } from "src/common/dto/pagination.dto";

export class FindUsersDto extends PartialType(Pagination) {
  name: string;
}
