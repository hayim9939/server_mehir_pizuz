import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from 'src/schemas/city.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getCities(): Promise<City[]> {
    return this.citiesService.getCities();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  addCities(@Body('cities') cities: City[]) {

    return this.citiesService.addCities(cities);
  }
}
