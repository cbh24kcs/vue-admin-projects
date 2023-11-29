import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  @InjectRepository(User)
  private userRepository: Repository<User>;

  async login()

  // async findAll(): Promise<User[]> {
  //     return await this.userRepository.findAll();
  // }

  // async findOne(id: number): Promise<User> {
  //     return await this.userRepository.findOne({where: {id}});
  // }

  // async create(user: User): Promise<User> {
  //     return await this.userRepository.create(user);
  // }
}
