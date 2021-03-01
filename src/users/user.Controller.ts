import {  Controller, Post,Body,Get,Param,Patch,Delete,Put, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { User } from './user.model';
import {UsersService} from './users.service'
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService,private authService: AuthService) {}
   @UseGuards(JwtAuthGuard)
  @Post('/addUser')
 async addProduct(@Body() user: User) {
    return this.userService.insertUser(user);
  }  

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user) {
   if (await this.userService.login(user)){
    return this.authService.login(user);
   }
   else {
    return  null
   }
    
  }

 
}
