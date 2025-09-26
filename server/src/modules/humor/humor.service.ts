import { Injectable } from '@nestjs/common';
import { PrismaServiceTermometro } from 'src/prisma/prisma.service';
import { CreateHumorDto } from './dto/create-humor.dto';

@Injectable()
export class HumorService {
  constructor(private prismaServiceControle: PrismaServiceTermometro) {}

  async create(data: CreateHumorDto) {
    return this.prismaServiceControle.humor.create({
      data: {
        humor: data.humor,
        comentario: data.comentario,
        id_ws: data.id_ws,
        ajuda: data.ajuda,
      },
    });
  }

  async findAll() {
    return this.prismaServiceControle.humor.findMany({});
  }
}