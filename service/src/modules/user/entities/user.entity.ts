import {
  Entity,
  PrimaryColumn,
  OneToMany,
  ManyToMany,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";

@Entity({})
export class User {
  @PrimaryGeneratedColumn({ comment: "主键" })
  id: number;

  @Column({ comment: "账户" })
  account: string;

  @Column({ comment: "密码" })
  password: number;

  @Column({ comment: "密码" })
  lock: number;


}
