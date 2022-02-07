import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): string {
    return 'OK';
  }

  getGreeting(): string {
    return 'Have a nice day!!!';
  }
}
