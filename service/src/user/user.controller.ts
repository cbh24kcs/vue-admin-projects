import { Controller, Get, Render } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Controller("user")
export class UserController {
  @InjectRepository(User)
  private userRepository: Repository<User>;



}
