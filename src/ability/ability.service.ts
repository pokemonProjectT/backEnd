import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { from, Observable } from 'rxjs';
import {Ability} from './ability.model'
import {Model} from 'mongoose'
import { AxiosResponse } from 'axios';
import {map} from 'rxjs/operators'
@Injectable()
export class AbilityService {
    constructor(@InjectModel('Ability') private readonly abilityModel: Model<Ability>,
    private httpService: HttpService){}
    
    findAll(): Observable<any>{
        return this.httpService.get<any>('https://pokeapi.co/api/v2/ability',{
            headers: {
                'Accept':'application/json'
            }
        }).pipe(
            map(response=>response.data)
        );
      }


      addAbility(ability: Ability){
        const newAbility = new this.abilityModel(
            ability
        )
        newAbility.save()
    }
}
