import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({})
export class UserProfile {
  @PrimaryGeneratedColumn({ comment: "主键" })
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column({ comment: "邮箱", length: 500 })
  email: string;

  @Column({ comment: "手机号", length: 20 })
  phone: string;
}
