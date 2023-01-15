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
import { UsersService } from './users.service';
import { ProductsService } from '../products/products.service';

@Controller()
export class UsersController {
  constructor(
    private userService: UsersService,
    private productService: ProductsService,
  ) {}

  @Get('users')
  getAllUsers(@Request() req, @Response() res) {
    this.userService
      .getAllUsers()
      .then((users) => {
        res.status(HttpStatus.OK).json(users);
      })
      .catch((error) => {
        console.error(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Get('users/:id')
  getUser(@Response() res, @Param('id') id) {
    this.userService
      .getUser(+id)
      .then((user) => {
        res.status(HttpStatus.OK).json(user);
      })
      .catch((error) => {
        console.error(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }

  @Post('users')
  addUser(@Response() res, @Body() createUserDTO: CreateUsersDto) {
    this.userService.addUser(createUserDTO).subscribe((users) => {
      res.status(HttpStatus.OK).json(users);
    });
  }

  @Get('testProducts')
  async testGetAllProducts(@Request() req, @Response() res) {
    await this.productService
      .getAllProducts()
      .then((products) => {
        res.status(HttpStatus.OK).json(products);
      })
      .catch((error) => {
        console.error(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
}
