import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateFuncionarioDto {
    @IsString()
    nome: string;

    @IsString()
    cargo: string;

    @IsNumber({ maxDecimalPlaces: 2 })
    salario: number;

    @IsInt()
    dinheiroId: number;
}