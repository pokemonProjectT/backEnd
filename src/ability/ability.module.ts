import {  HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AbilityController } from './ability.controller';
import { AbilityService } from './ability.service';
import { AbilitySchema } from './ability.model';

@Module({
  imports: [
      HttpModule,
    MongooseModule.forFeature([{ name: 'Ability', schema: AbilitySchema }]),
  ],
  controllers: [AbilityController],
  providers: [AbilityService],
})
export class AbilityModule {}