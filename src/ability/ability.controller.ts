import {  Controller, Post,Body,Get,Param,Patch,Delete,Put } from '@nestjs/common';
import { Ability } from './ability.model';
import {AbilityService} from './ability.service'

@Controller('ability')
export class AbilityController {
  constructor(private readonly abilityService: AbilityService) {}
  @Post('/addAbility')
  addAbility (){    
    this.abilityService.findAll().subscribe(res=>
     res.results.forEach(ability=>{
       this.abilityService.addAbility(ability)
     })
     )
     
     }
}
