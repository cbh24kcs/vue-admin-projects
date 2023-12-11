import * as crypto from "crypto"; //node内置模块

import { Inject, Injectable, Logger } from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { UserLoginDto } from "./dto/login-user.dto";
import { UserRegisterDto } from "./dto/register-user.dto";

function md5(str: string) {
  const hash = crypto.createHash("md5").update(str).digest("hex");
  return hash;
}

@Injectable()
export class UserService {
  @InjectRepository(User)
  private userRepository: Repository<User>;

  @Inject()
  private logger: Logger;

  async login(params: UserLoginDto) {
    const result = await this.userRepository.findOneBy({
      account: params.account,
    });
    if (!result) {
      throw new Error("用户不存在");
    }

    // 密码其实不应该明文入库，先暂时这么写
    if (result.password !== params.password) {
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
    // user.lock = 0;

    try {
      await this.userRepository.save(user);
    } catch (e) {
      this.logger.error(e.message);
      throw new Error("注册失败");
    }
  }
}
