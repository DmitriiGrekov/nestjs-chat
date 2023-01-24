import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresGenericModule } from './frameworks/postgresDataService/postgreGeneric.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from './core/entities/room.entity';
import { MessageEntity } from './core/entities/message.entity';
import { UserModule } from './use-cases/users/user.module';
import { UserEntity } from './core/entities/user.entity';

@Module({
  imports: [
    PostgresGenericModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'chat',
      entities: [UserEntity, RoomEntity, MessageEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
