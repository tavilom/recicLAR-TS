import { Module } from '@nestjs/common';
import { ReciclarService } from './reciclar.service';
import { ReciclarController } from './reciclar.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReciclarController],
  providers: [ReciclarService],
})
export class ReciclarModule {}