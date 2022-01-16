import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGreeting(): string {
    return 'Have a good day!';
  }

  getHealthCheck(): string {
    return 'OK';
  }
}
