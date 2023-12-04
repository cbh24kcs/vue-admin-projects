import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "xz_hnjmzyxy",
})
export class XZ_hnjmzyxy {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ name: "school_name", type: "varchar", length: 255 })
  school_name: string;

  @Column({ name: "web_name", type: "varchar", length: 255 })
  web_name: string;

  @Column({ name: "web_link", type: "varchar", length: 255 })
  web_link: string;

  @Column({ name: "part_name", type: "varchar", length: 255 })
  part_name: string;

  @Column({ name: "part_link", type: "varchar", length: 255 })
  part_link: string;

  @Column({ name: "article_link", type: "text" })
  article_link: string;

  @Column({ name: "article_title", type: "varchar", length: 255 })
  article_title: string;

  @Column({ name: "article_content", type: "longtext" })
  article_content: string;

  @Column({ name: "status", type: "int" })
  status: number;

  @Column({ name: "publish_time", type: "varchar", length: 255 })
  publish_time: string;

  @Column({ name: "create_time", type: "datetime" })
  create_time: Date;

  @Column({ name: "update_time", type: "datetime" })
  update_time: Date;
}
