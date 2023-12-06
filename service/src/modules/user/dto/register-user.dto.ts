import { IsString, IsNotEmpty } from "class-validator";

export class UserRegisterDto {
  @IsString()
  @IsNotEmpty()
  account: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
