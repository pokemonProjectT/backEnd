import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
    constructor( private usersService: UsersService,
        private jwtService: JwtService) {}

    async validateUser(name: string, pass: string) {
      const user = await this.usersService.findOne(name);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }


    async login(user: any) {
    
        const payload = { email: user.email, _id: user._id };
        return {
          user: user,
          access_token: this.jwtService.sign(payload),
        };
      }
}
