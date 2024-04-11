import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(account: string, password: string) {
    const res = await this.userService.findUser(account);
  }

  async register(account: string, password: string) {
    let res = await this.userService.createUser(account, password);
  }
}
