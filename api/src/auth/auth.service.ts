import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(login: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByLogin(login);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: User) {
    return {
      access_token: 'jwt',
      user,
    };
  }
}
