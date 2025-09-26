import { IsString, IsOptional } from 'class-validator';

export class CreateHumorDto {
  @IsString()
  humor: string;

  @IsOptional()
  @IsString()
  comentario?: string;

  @IsString()
  id_ws: string;

  @IsOptional()
  @IsString()
  ajuda?: string;
}