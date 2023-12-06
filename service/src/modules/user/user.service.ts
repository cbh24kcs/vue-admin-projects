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

    if (!result) {
      throw new HttpException("用户不存在", 200);
    }

    // 密码其实不应该明文入库，先暂时这么写
    if (result.password != params.password) {
      throw new HttpException("用户密码有误", 200);
    }

    // if(result.password){

    // }
    return result;
  }

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

class FamilyMember {
  person = { name: "", hobby: "" };
  constructor(name) {
    this.person.name = name;
    this.person.hobby = "骂xbz";
  }
  getPerson() {
    return this.person;
  }
}


FamilyMember
