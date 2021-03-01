import { forwardRef, HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { UserController } from './user.Controller';
import { UserSchema } from './user.model';
import { UsersService } from './users.service';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    HttpModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
   
  ],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
