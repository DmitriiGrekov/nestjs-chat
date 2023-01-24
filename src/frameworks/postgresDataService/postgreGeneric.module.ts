import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from '../../core/entities/message.entity';
import { RoomEntity } from '../../core/entities/room.entity';
import { UserEntity } from '../../core/entities/user.entity';
import { PostgresDataService } from './postgresDataService.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, MessageEntity, RoomEntity])],
  providers: [PostgresDataService],
})
export class PostgresGenericModule { }
