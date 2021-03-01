import * as mongoose from 'mongoose';
import { Pokemon } from 'src/pokemons/pokemon.model';

export const AbilitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
 
});

export interface Ability extends mongoose.Document {
  id: string;
  name: string;
url: string;
}