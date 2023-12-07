import { UserLoginDto } from "./dto/login-user.dto";
import { UserRegisterDto } from "./dto/register-user.dto";
import { HttpException, HttpStatus, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import CryptoJS from "crypto-js"; //加密算法类库

@Injectable()
export class UserService {
  @InjectRepository(User)
  private userRepository: Repository<User>;

  async login(params: UserLoginDto) {
    const result = await this.userRepository.findOneBy({
      account: params.account,
    });
    console.log(result);
    if (!result) {
      throw new HttpException({ code: "", data: null, msg: "用户不存在" }, 200);
    }

    // 密码其实不应该明文入库，先暂时这么写
    if (result.password !== params.password) {
      throw new HttpException({ code: "", data: null, msg: "用户密码有误" }, 200);
    }

    return result;
  }
}
