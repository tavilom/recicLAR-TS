import { Module } from '@nestjs/common';
import { HumorService } from './humor.service';
import { HumorController } from './humor.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HumorController],
  providers: [HumorService],
})
export class HumorModule {}