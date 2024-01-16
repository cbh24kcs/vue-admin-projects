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
  password: string;

  @Column({ comment: "用户名" })
  name: string;

  @Column({ comment: "电话" })
  telephone: string;

  @Column({ comment: "邮箱" })
  email: string;

  @Column({ comment: "锁" })
  lock: number;
}
