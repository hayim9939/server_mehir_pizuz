import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'moshe',
      password: 'moshenko',
      admin: true,
    },
    {
      userId: 2,
      username: 'haim',
      password: 'haimov',
    },
    {
      userId: 3,
      username: 'shuki',
      password: 'shukov',
    },
  ];

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
