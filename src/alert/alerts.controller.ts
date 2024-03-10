import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { City } from 'src/schemas/city.schema';
import { AuthGuard } from '@nestjs/passport';
import { AlertsService } from './alerts.service';
import { Alert } from 'src/schemas/alert.schema';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAlertsByCity(@Body('city') city: string): Promise<Alert[]> {
    return this.alertsService.getAlertsByCity(city);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('count')
  getCountByCity(@Body('city') city: string): Promise<number> {
    return this.alertsService.getCountByCity(city);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  addAlerts(@Body('alerts') alerts: Alert[]) {
    return this.alertsService.addAlerts(alerts);
  }
}

