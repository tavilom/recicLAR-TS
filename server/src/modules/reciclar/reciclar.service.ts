import { BadGatewayException, BadRequestException, Injectable } from "@nestjs/common";
import { PrismaServiceReciclar } from "src/prisma/prisma.service";
import { Dinheiro } from "prisma/generated/reciclar";
//==CREATE
import { CreateDinheiroDto } from "./dto/create/create-dinheiro.dto";
//===PATHC
import { UpdateDinheiroDto } from "./dto/patch/update-dinheiro.dto";

@Injectable()
export class ReciclarService {
  findAll() {
    throw new Error("Method not implemented.");
  }
  constructor(private prismaServiceControle: PrismaServiceReciclar) {}

  //=====GET=====

  async findAllDinheiro(): Promise<Dinheiro[]> {
    return this.prismaServiceControle.dinheiro.findMany();
  }

  //=====POST=====

  async createDinheiro(dto: CreateDinheiroDto) {
    return this.prismaServiceControle.dinheiro.create({
      data: {
        tipo: dto.tipo,
        valor: dto.valor,
        dataMovimentacao: dto.dataMovimentacao,
        movimentacao: dto.movimentacao,

        mercadoria: dto.mercadoriaId
          ? { connect: { id: dto.mercadoriaId } }
          : undefined,

        funcionarios: dto.funcionariosIds
          ? {
              connect: dto.funcionariosIds.map((id) => ({ id })),
            }
          : undefined,

        vales: dto.valesIds
          ? {
              connect: dto.valesIds.map((id) => ({ id })),
            }
          : undefined,
      },
    });
  }

  //=====PATCH=====

  async updateDinheiro(id: number, dto: UpdateDinheiroDto): Promise<Dinheiro> {
    return this.prismaServiceControle.dinheiro.update({
      where: { id },
      data: {
        tipo: dto.tipo,
        valor: dto.valor,
        dataMovimentacao: dto.dataMovimentacao,
        movimentacao: dto.movimentacao,

        mercadoria: dto.mercadoriaId
          ? { connect: { id: dto.mercadoriaId } }
          : undefined,

        funcionarios: dto.funcionariosIds
          ? {
              set: dto.funcionariosIds.map((id) => ({ id })), // substitui a lista
            }
          : undefined,

        vales: dto.valesIds
          ? {
              set: dto.valesIds.map((id) => ({ id })), // substitui a lista
            }
          : undefined,
      },
    });
  }

  //=====DELETE======
  async deleteDinheiro(id: number): Promise<Dinheiro> {
    if (!Number.isInteger(id) || id <= 0) {
      throw new BadGatewayException('id inválido')
    }
    try {
      return await this.prismaServiceControle.dinheiro.delete({
        where: { id }
      });
    } catch (e: any) {
      if (e?.code ==='P2025') {
        throw new BadRequestException('Dinheiro não encontrado')
      }
      throw e;
    }
  }

  
}
