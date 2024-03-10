import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HeatmapModule } from './heatmap/heatmap.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesModule } from './cities/cities.module';
import { AlertsModule } from './alert/alerts.module';

@Module({
  imports: [
    AuthModule,
    HeatmapModule,
    UsersModule,
    CitiesModule,
    AlertsModule,
    MongooseModule.forRoot(
      'mongodb+srv://hayim9939:HoPLdUPR0DW7yI5i@cluster0.ekviy6c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
