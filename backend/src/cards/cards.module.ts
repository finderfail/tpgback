import { Module } from '@nestjs/common';
import { CardsController } from '../app.controller.js';
import { CardsService } from './cards.service.js';


@Module({  
    imports: [],
    controllers: [CardsController],
    providers: [CardsService]
})
export class CardsModule {}
