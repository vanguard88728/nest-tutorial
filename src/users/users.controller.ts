import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Request,
  Response,
} from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(@Request() req, @Response() res) {
    const users = [{ Name: 'Michael', Age: 27 }];
    res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  getUser(@Param() params) {
    return { getUser: params.id };
  }

  @Post()
  addUser(@Body() createUserDTO: CreateUsersDto) {
    console.log('Name', createUserDTO.name);
  }
}
