import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UpdateUserDto } from "src/core/dto/users/updateUser.dto";
import { CreateUserDto } from "../../core/dto/users/createUser.dto";
import { UserEntity } from "../../core/entities/user.entity";
import { PostgresDataService } from "../../frameworks/postgresDataService/postgresDataService.service";

@Injectable()
export class UserService {
  constructor(private dataService: PostgresDataService) { }

  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.dataService.user.findAll();
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      return this.dataService.user.create({ ...createUserDto })
    } catch (error) {
      throw new BadRequestException(error)
    }
  }

  async findOne(id: number): Promise<UserEntity> {
    try {
      const user = await this.dataService.user.find(id);
      if (!user) throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    try {
      const user = await this.dataService.user.find(id);
      if (!user)
        throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
      return await this.dataService.user.update(id, updateUserDto);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
