import { ApiProperty } from "@nestjs/swagger";
import { Matches, IsNotEmpty } from "class-validator";

export class CreatePersonDto {
  @ApiProperty({ example: "陈哥" })
  @IsNotEmpty({ message: "姓名不能为空" })
  name: string;

  @ApiProperty({ example: 18 })
  age: number;

  @Matches(/^1\d{10}$/g, { message: "请输入正确的手机号" })
  @ApiProperty({ example: "15052508051" })
  phone: string;
}
