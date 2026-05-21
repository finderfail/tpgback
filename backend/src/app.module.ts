import { Module } from '@nestjs/common';
import { AppController, CardsController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CardsService } from './cards/cards.service.js';
import { CardsModule } from './cards/cards.module.js';

@Module({
  imports: [CardsModule],
  controllers: [AppController, CardsController],
  providers: [AppService, CardsService],
})
export class AppModule {}
