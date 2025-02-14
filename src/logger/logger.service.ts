import { Injectable } from '@nestjs/common';
import { MessageFormatterService } from '../message-formatter/message-formatter.service';

@Injectable()
export class LoggerService {
  constructor(private messageFormatterService: MessageFormatterService) {}

  log() {
    console.log(this.messageFormatterService.format('Hello World'));
  }
}
