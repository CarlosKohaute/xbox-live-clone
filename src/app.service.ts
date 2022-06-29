import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'App running! 🚀 Visit http://localhost:3333/docs to see documentation.';
  }
}
