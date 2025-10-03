import { BadGatewayException, BadRequestException, Injectable } from "@nestjs/common";
import { PrismaServiceReciclar } from "src/prisma/prisma.service";
import { Dinheiro, Funcionario } from "prisma/generated/reciclar";
//==CREATE
import { CreateDinheiroDto } from "./dto/create/create-dinheiro.dto";
import { CreateFuncionarioDto } from "./dto/create/create-funcionario.dto";
//===PATHC
import { UpdateDinheiroDto } from "./dto/patch/update-dinheiro.dto";
import { UpdateFuncionarioDto } from "./dto/patch/update-funcionario.dto";

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

  async findAllFuncionario(): Promise<Funcionario[]> {
    return this.prismaServiceControle.funcionario.findMany();
  }

  //=====POST=====


  // async createFuncionario(dto: CreateFuncionarioDto) {
  //   return this.prismaServiceControle.funcionario.create({
  //     //TODO: Continuar com create
  //   })
  // }

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
