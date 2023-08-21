import { Entity, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({})
export class UserLog {
  @PrimaryGeneratedColumn({ comment: "主键" })
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
}
