import { Controller, Get, Render } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";

@Controller("user")
export class UserController {
  @InjectRepository(User)
  private userRepository: Repository<User>;

  @Get("/list")
  async list() {
    return await this.userRepository.find({
      relations: ["profile"],
    });
  }


  @Get("/page001")
  @Render("user/001.hbs")
  async page001() {
    let users = await this.userRepository.find();
    return {
      users,
    };
  }

}
