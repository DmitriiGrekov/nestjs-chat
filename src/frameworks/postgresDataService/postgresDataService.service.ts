/* eslint-disable prettier/prettier */
import { OnApplicationBootstrap } from '@nestjs/common';
import { MessageEntity } from '../../core/entities/message.entity';
import { RoomEntity } from '../../core/entities/room.entity';
import { UserEntity } from '../../core/entities/user.entity';
import { IDataService } from 'src/core/services/IDataService.service';
import { PostgresGenericRepository } from './postgreGenericRepository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class PostgresDataService
  implements IDataService, OnApplicationBootstrap {
  user: PostgresGenericRepository<UserEntity>;
  message: PostgresGenericRepository<MessageEntity>;
  room: PostgresGenericRepository<RoomEntity>;

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(MessageEntity)
    private messageRepository: Repository<MessageEntity>,
    @InjectRepository(RoomEntity)
    private roomRepository: Repository<RoomEntity>,
  ) { }

  onApplicationBootstrap() {
    this.user = new PostgresGenericRepository<UserEntity>(this.userRepository)
    this.message = new PostgresGenericRepository<MessageEntity>(this.messageRepository)
    this.room = new PostgresGenericRepository<RoomEntity>(this.roomRepository)

  }
}
