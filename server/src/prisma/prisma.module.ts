import { Module } from '@nestjs/common';
import { PrismaServiceReciclar } from './prisma.service';

@Module({
  providers: [PrismaServiceReciclar],
  exports: [PrismaServiceReciclar]
})
export class PrismaModule {}
