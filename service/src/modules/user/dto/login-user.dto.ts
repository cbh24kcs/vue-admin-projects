import { PartialType } from "@nestjs/mapped-types";
import { UserRegisterDto } from "./register-user.dto";

export class UserLoginDto extends PartialType(UserRegisterDto) {}
