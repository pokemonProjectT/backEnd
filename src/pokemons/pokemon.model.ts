import * as mongoose from 'mongoose';

export const PokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
 
});

export interface Pokemon extends mongoose.Document {
  id: string;
  name: string;
  url: string;
}