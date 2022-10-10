import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterInput } from './dto/register-input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByLogin(login);

    const valid = await bcrypt.compare(password, user.password);

    if (user && valid) {
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

  async register(input: RegisterInput) {
    const user = await this.usersService.findByLogin(input.login);

    if (user) {
      throw new Error('User with such login is already exists');
    }

    const password = await bcrypt.hash(input.password, 10);

    return this.usersService.create({
      ...input,
      password,
    });
  }
}
