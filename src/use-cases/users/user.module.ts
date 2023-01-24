import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from '../../core/entities/message.entity';
import { RoomEntity } from '../../core/entities/room.entity';
import { UserEntity } from '../../core/entities/user.entity';
import { PostgresDataService } from '../../frameworks/postgresDataService/postgresDataService.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, MessageEntity, RoomEntity]),
  ],
  controllers: [UserController],
  providers: [UserService, Object, PostgresDataService],
})
export class UserModule { }
