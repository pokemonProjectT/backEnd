import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from './user.model'

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    insertUser(user: User){
        const newUser = new this.userModel(
           user
        )
        newUser.save().then(result =>{
            console.log(result)
        })
    }

    async findOne(name: string) {
        return this.userModel.findOne(user => user.name === name);
      }

      async login(user){
      const data= await this.userModel.findOne({email:user.email,password:user.password})
    return data;  
    }  
           
}
