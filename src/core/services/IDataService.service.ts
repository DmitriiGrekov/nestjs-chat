import { Injectable } from '@nestjs/common';
import { MessageEntity } from '../entities/message.entity';
import { RoomEntity } from '../entities/room.entity';
import { UserEntity } from '../entities/user.entity';
import { IGenericRepository } from '../interfaces/IGenericRepository.interfaces';

export interface IDataService {
  user: IGenericRepository<UserEntity>;
  room: IGenericRepository<RoomEntity>;
  message: IGenericRepository<MessageEntity>;
}
