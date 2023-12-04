import { IsString, IsNotEmpty } from "class-validator";

export class UserRegisterDto {
  @IsString()
  @IsNotEmpty()
  acount: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
