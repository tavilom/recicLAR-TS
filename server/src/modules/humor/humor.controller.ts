import { Controller, Post, Body, Get } from '@nestjs/common';
import { HumorService } from './humor.service';
import { CreateHumorDto } from './dto/create-humor.dto';

@Controller('humor')
export class HumorController {
  constructor(private readonly humorService: HumorService) {}

  @Post()
  create(@Body() createHumorDto: CreateHumorDto) {
    return this.humorService.create(createHumorDto);
  }

  @Get()
  findAll() {
    return this.humorService.findAll();
  }
}