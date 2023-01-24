import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { UpdateUserDto } from "src/core/dto/users/updateUser.dto";
import { CreateUserDto } from "../../core/dto/users/createUser.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @HttpCode(200)
  @Get("list")
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  @HttpCode(201)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @HttpCode(200)
  @Get(':id')
  find(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

}
