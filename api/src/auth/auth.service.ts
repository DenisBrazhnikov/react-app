import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByLogin(login);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        login: user.login,
        id: user.id,
      }),
      user,
    };
  }
}
