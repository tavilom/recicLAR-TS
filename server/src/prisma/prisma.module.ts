import { Module } from '@nestjs/common';
import { PrismaServiceTermometro } from './prisma.service';

@Module({
  providers: [PrismaServiceTermometro],
  exports: [PrismaServiceTermometro]
})
export class PrismaModule {}
