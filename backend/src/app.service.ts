import 'dotenv/config';
import dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

dotenv.config({ path: '../.env' });



@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
