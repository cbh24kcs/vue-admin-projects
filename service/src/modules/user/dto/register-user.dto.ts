import { IsNotEmpty, IsString } from "class-validator";

export class UserRegisterDto {
  @IsString({ message: "账户名必须是字符串" })
  @IsNotEmpty({ message: "账户名不能为空" })
  account: string;

  @IsString({ message: "密码必须是字符串" })
  @IsNotEmpty({ message: "密码不能为空" })
  password: string;
}
