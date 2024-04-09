import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";
import { UserRegisterDto } from "src/modules/user/dto/register-user.dto";

export class UserLoginDto {
  @IsString({ message: "账户名必须是字符串" })
  @IsNotEmpty({ message: "账户名不能为空" })
  account: string;

  @IsString({ message: "密码必须是字符串" })
  @IsNotEmpty({ message: "密码不能为空" })
  password: string;
}
