import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  ParseIntPipe,
  Delete,
} from "@nestjs/common";
import { ReciclarService } from "./reciclar.service";
//====CREATE
import { CreateDinheiroDto } from "./dto/create/create-dinheiro.dto";
import { CreateFuncionarioDto } from "./dto/create/create-funcionario.dto";
//====PATCH
import { UpdateDinheiroDto } from "./dto/patch/update-dinheiro.dto";
import { UpdateFuncionarioDto } from "./dto/patch/update-funcionario.dto";

@Controller("reciclar")
export class ReciclarController {
  constructor(private readonly recilarService: ReciclarService) {}

  //=====GET=====

  @Get("dinheiro")
  findAllDinheiro() {
    return this.recilarService.findAllDinheiro();
  }

  //=====POST=====

  @Post("dinheiro")
  createDinehiro(@Body() dto: CreateDinheiroDto) {
    return this.recilarService.createDinheiro(dto);
  }

  //=====PATCH=====

  @Patch("dinheiro/:id")
  updateDinheiro(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateDinheiroDto
  ) {
    return this.recilarService.updateDinheiro(id, dto);
  }

  //=====DELETE=====
  @Delete("dinheiro/:id")
  deleteDinheiro(@Param("id", ParseIntPipe) id: number) {
    return this.recilarService.deleteDinheiro(id);
  }
}
