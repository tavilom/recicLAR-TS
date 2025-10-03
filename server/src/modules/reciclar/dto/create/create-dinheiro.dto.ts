// create-dinheiro.dto.ts
import { IsString, IsNumber, IsOptional, IsDate, IsEnum, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

enum TipoMovimentacao {
  ENTRADA = 'ENTRADA',
  SAIDA = 'SAIDA',
}

export class CreateDinheiroDto {
  @IsString()
  tipo: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  valor: number;

  @IsDate()
  @Type(() => Date)
  dataMovimentacao: Date;

  @IsEnum(TipoMovimentacao)
  movimentacao: TipoMovimentacao;

  // relação com Mercadoria (opcional)
  @IsOptional()
  @IsInt()
  mercadoriaId?: number;

  // relação com Funcionários (opcional, pode ser lista de ids)
  @IsOptional()
  funcionariosIds?: number[];

  // relação com Vales (opcional, pode ser lista de ids)
  @IsOptional()
  valesIds?: number[];
}
