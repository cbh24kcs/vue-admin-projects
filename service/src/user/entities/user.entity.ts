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
import { UserProfile } from "./user-profile.entity";
import { UserLog } from "./user-log.entity";
import { Role } from "./role.entity";

@Entity({})
export class User {
  @PrimaryGeneratedColumn({ comment: "主键" })
  id: number;

  @Column({ comment: "用户名" })
  name: string;

  @Column({ comment: "年龄" })
  age: number;

  @OneToOne(() => UserProfile, profile => profile.user)
  @JoinColumn({ name: "user_profile_id" })
  profile: UserProfile;

  @OneToMany(() => UserLog, log => log.user)
  logs: UserLog[];

  @ManyToMany(() => Role, role => role.users)
  @JoinTable()
  roles: Role[];

  // teams:
}
