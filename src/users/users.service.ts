import { HttpException, Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { Observable, of } from 'rxjs';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Michael', age: 25 },
    { id: 2, name: 'Mary', age: 27 },
  ];

  getAllUsers() {
    return Promise.resolve(this.users);
  }

  getUser(id: number) {
    const user = this.users.find((user) => {
      return user.id == id;
    });

    if (!user) {
      throw new HttpException('User not found', 404);
    }
    return Promise.resolve(user);
  }

  addUser(user: CreateUsersDto): Observable<object[]> {
    this.users.push(user);
    return of(this.users);
  }
}
