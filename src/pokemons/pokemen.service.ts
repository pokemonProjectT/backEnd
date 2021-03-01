import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import { from, Observable } from 'rxjs';
import {Pokemon} from './pokemon.model'
import {Model} from 'mongoose'
import { AxiosResponse } from 'axios';
import {map} from 'rxjs/operators'
@Injectable()
export class PokemeonService {
    constructor(@InjectModel('Pokemon') private readonly pokemonModel: Model<Pokemon>,
    private httpService: HttpService){}
    findAll(): Observable<any>{
        return this.httpService.get<any>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200',{
            headers: {
                'Accept':'application/json'
            }
        }).pipe(
            map(response=>response.data)
        );
      }


     async addPokemon(pokemon: Pokemon){
        const newpokemon = new this.pokemonModel(
            pokemon
        )
      await newpokemon.save()
        return newpokemon
    }

  async  getPokemon(): Promise<Pokemon[]>{
        const pokemons = await  this.pokemonModel.find().exec()
        return pokemons
    }


    async getPokemonById(id:any){
        let  pokemon
    try {
      pokemon = await this.pokemonModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find pokemon.');
    }
    if (!pokemon) {
      throw new NotFoundException('Could not find pokemon.');
    }
    return pokemon;
  }

 async deletePokemon(id: any){
  const response =await  this.pokemonModel.findByIdAndRemove(id).exec()
    if(!response){
        return "pokemon not found"
    }
    else {
        return "pokemon deleted"
    }
  }
  async updatePokemon(id: any, pokemon: Pokemon){
    console.log(pokemon);
    
  const pokemonUpdated = await this.pokemonModel.findByIdAndUpdate(id,pokemon).exec()
  return pokemonUpdated;
    
  
  }
}
