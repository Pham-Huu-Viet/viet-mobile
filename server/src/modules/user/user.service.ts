import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: '1', name: 'Nguyen Van A' },
    { id: '2', name: 'Tran Thi B' },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id == id);
  }
}
