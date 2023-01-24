import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MessageEntity {

  @PrimaryGeneratedColumn()
  id: number;

}
