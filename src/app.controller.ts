import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealthCheck(): string {
    return this.appService.getHealthCheck();
  }

  @Get('/greeting')
  getGreeting(): string {
    return this.appService.getGreeting();
  }
}
