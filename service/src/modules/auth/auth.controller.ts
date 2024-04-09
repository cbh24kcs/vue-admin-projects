import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body(ValidationPipe) params: UserLoginDto) {
    console.log("login");
    return this.authService.login();
  }

  @Post("/register")
  register() {
    console.log("register");
    return;
  }
}
