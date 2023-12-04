import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from "typeorm"

@Entity({})
export class Menu {
  @PrimaryGeneratedColumn({
    comment: '主键'
  })
  id: number;

  @Column({
    comment: '前端路由名称'
  })
  name: string;

  @Column({
    comment: '前端路由路径'
  })
  path: string;

  @Column({
    comment:'子节点id'
  })
  parentId: number;

  @CreateDateColumn({
    comment: '创建时间'
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: '更新时间'
  })
  updateTime: Date;
}


