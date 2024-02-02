import { IsNotEmpty, isString, isBoolean } from "class-validator";

export class PagingDto {
  pageSize: number;

  pageNo: number;

  @IsNotEmpty({ message: "needPaging不能为空" })
  needPaging: boolean;
}
