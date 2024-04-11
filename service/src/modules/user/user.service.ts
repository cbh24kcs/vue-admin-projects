import { HttpException, Inject, Injectable, Logger } from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { UserLoginDto } from "./dto/login-user.dto";
import { UserRegisterDto } from "./dto/register-user.dto";
import { md5 } from "src/utils/encrypts";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async createUser(account: string, password: string) {}

  async findUser(account: string) {
    const res = await this.userRepository
      .createQueryBuilder("user")
      .where("user.account = :account", { account })
      .getMany();
    return res;
  }

  async deleteUser() {}

  async updateUser(name: string, nickName: string, phone: number, email: number) {
    
  }

  async login(params: UserLoginDto) {
    const result = await this.userRepository.findOneBy({
      account: params.account,
    });
    if (!result) {
      throw new Error("用户不存在");
    }

    if (result.password !== md5(params.password)) {
      throw new Error("用户密码有误");
    }

    return result;
  }

  async register(params: UserRegisterDto) {
    const result = await this.userRepository.findOneBy({
      account: params.account,
    });

    if (result) {
      throw new Error("用户已存在");
    }

    const user = new User();
    user.account = params.account;
    user.password = md5(params.password);
    user.lock = 0;

    try {
      await this.userRepository.save(user);
    } catch (e) {
      throw new HttpException("注册失败", 500);
    }
  }

  async findUsers(name: string, needPage: number, pageNo: number, pageSize: number) {
    const condition: Record<string, any> = {};

    if (needPage === 1) {
      if (!pageNo && !pageSize) {
        throw new Error("分页参数");
      }
    }

    const skipCount = pageNo;

    const [user, totalCount] = await this.userRepository.findAndCount({
      select: ["id", "name", "email", "telephone"], //表示必须选择对象的哪些属性
      skip: 123,
    });
  }
}
