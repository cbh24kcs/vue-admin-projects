import { UserLoginDto } from "./dto/login-user.dto";
import { UserRegisterDto } from "./dto/register-user.dto";
import { HttpException, Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import CryptoJS from 'crypto-js' //加密算法类库


@Injectable()
export class UserService {

  @InjectRepository(User)
  private userRepository: Repository<User>;

  async login(params: UserLoginDto) {
    const result = await this.userRepository.findOneBy({
      account: params.acount,
    });
    // if(!result){
    //   // throw new HttpException('')
    // }
    // if(result.password){

    // }
    console.log("123123213",result)
    return result
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
