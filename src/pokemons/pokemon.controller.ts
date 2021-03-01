import {  Controller, Post,Body,Get,Query,Param,Patch,Delete,Put } from '@nestjs/common';
import { Pokemon } from './pokemon.model';
import {PokemeonService} from './pokemen.service'


@Controller('pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemeonService) {}
  //add all pokemons to the db
  @Post('/addAllPokemonsToDb')
  addPokemons() {
    this.pokemonService.findAll().subscribe(res =>
      res.results.forEach(pokemon => {
        this.pokemonService.addPokemon(pokemon)
      },
      err=>{console.log(err);
      }, 
      ()=>{console.log("added success");
      })
    )
  }
  @Post('/addPokemon')
  addPokemon( @Body() pokemon : Pokemon){
    return this.pokemonService.addPokemon(pokemon)
  }
  //get all pokemons
    @Get()
    getPokemon () {
       return this.pokemonService.getPokemon()
      }
      //get pokemon by id
      @Get(':id')
      getPokemonById (@Param('id') pokemonId: string){
         return this.pokemonService.getPokemonById(pokemonId)
        }
   
        //delet pokemon
        @Delete(':id')
        deletePokemon(
         @Param('id') pokemonId: string)  
       {
         return this.pokemonService.deletePokemon(pokemonId)
       }
       //update pokemon
       @Patch(':id')
   updateProduct(
    @Param('id') pokemonId: string,
    @Body() pokemon : Pokemon,
  )  
  {
    return this.pokemonService.updatePokemon(pokemonId, pokemon)
  }

}
