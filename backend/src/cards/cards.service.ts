import 'dotenv/config';
import dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

dotenv.config({ path: '../.env' });

let prisma: PrismaClient | null = null;

function getPrisma(): PrismaClient {
  if (!prisma) {
    const dbUrl = process.env.DATABASE_URL;
    console.log('DATABASE_URL:', dbUrl ? 'loaded' : 'NOT FOUND');
    const pool = new Pool({
      connectionString: dbUrl,
    });
    const adapter = new PrismaPg(pool);
    prisma = new PrismaClient({ adapter });
  }
  return prisma;
}


const defaultCards = [
  {
    title: 'Начало работы',
    categories: ['Для новичка', 'Основы работы'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    done: true,
    group: 'work',
  },
  {
    title: 'Работа с библиотеками GPN',
    categories: ['Профессионалу', 'Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    done: false,
    group: 'libraries',
  },
  {
    title: 'Работа с библиотеками KVN234',
    categories: ['Профессионалу', 'Библиотеки'],
    desc: 'Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете',
    done: false,
    group: 'libraries',
  },
];

@Injectable()
export class CardsService {
  async getCards() {
    const prisma = getPrisma();
    let cards = await prisma.card.findMany();
    
    if (cards.length === 0) {
      const created = await prisma.card.createMany({
        data: defaultCards,
      });
      console.log(`Seeded ${created.count} cards into database`);
      cards = await prisma.card.findMany();
    }
    
    return cards;
  }
}
