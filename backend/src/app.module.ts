import { Module } from '@nestjs/common';
import { AppController, CardsController } from './app.controller.js';
import { AppService, CardsService } from './app.service.js';

@Module({
  imports: [],
  controllers: [AppController, CardsController],
  providers: [AppService, CardsService],
})
export class AppModule {}
