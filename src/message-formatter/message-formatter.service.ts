import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageFormatterService {
  format(message: string) {
    return `[${new Date()}] ${message}`;
  }
}
