import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsersController {
  @Get('users')
  getAllUsers(): string {
    return 'This action returns all users';
  }
}
