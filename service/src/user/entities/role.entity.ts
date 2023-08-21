import { Entity, ManyToMany, JoinTable, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";
import { User } from "./user.entity";

@Entity({})
export class Role {
  @PrimaryGeneratedColumn({ comment: "主键" })
  id: number;

  @Column({ comment: "角色名称" })
  name: string;

  @ManyToMany(() => User, user => user.roles)
  users: User[];
}
