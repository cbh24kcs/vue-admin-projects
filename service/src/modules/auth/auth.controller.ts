import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body(ValidationPipe) dto: UserLoginDto) {
    const { account, password } = dto;
    this.authService.login(account, password);
  }

  @Post("/register")
  register(@Body(ValidationPipe) data: UserLoginDto) {
    this.authService.register();
    console.log("register");
    return;
  }
}
