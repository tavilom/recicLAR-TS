import { PartialType } from "@nestjs/mapped-types";
import { CreateFuncionarioDto } from "../create/create-funcionario.dto";

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {}