import { Controller, Get, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HeatmapService } from './heatmap.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('heatmap')
export class HeatmapController {
  constructor(private readonly heatmapService: HeatmapService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getHeatmap(@Body("city") city) {
    if (!city) {
      throw new HttpException('city is required', HttpStatus.BAD_REQUEST);
    }
    return this.heatmapService.getHeatmapByCity(city);
  }
}
