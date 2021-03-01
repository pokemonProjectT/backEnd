import {  HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonController } from './pokemon.controller';
import { PokemeonService } from './pokemen.service';
import { PokemonSchema } from './pokemon.model';

@Module({
  imports: [
      HttpModule,
    MongooseModule.forFeature([{ name: 'Pokemon', schema: PokemonSchema }]),
  ],
  controllers: [PokemonController],
  providers: [PokemeonService],
})
export class PokemonModule {}