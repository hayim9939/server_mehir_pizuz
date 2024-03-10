import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async register(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get()
  async allUsers() {
    return this.usersService.findAll();
  }
}
