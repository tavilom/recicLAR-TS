import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ReciclarModule } from './modules/reciclar/reciclar.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    PrismaModule,
    ReciclarModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
