import { Controller, Get } from '@nestjs/common';
import { CardsService } from './cards.service.js';

@Controller('info')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async getCards() {
    return this.cardsService.getCards();
  }
}