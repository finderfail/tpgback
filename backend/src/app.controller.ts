import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CardsService } from './cards/cards.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  
}

// @Controller('info')
// export class InfoController {
//   @Get()
//   getInfo(): string {
//     return 'карточки великие';
//   }
// }

@Controller('info')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async getCards() {
    return this.cardsService.getCards();
  }
}