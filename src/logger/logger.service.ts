import { Injectable } from '@nestjs/common';
import { MessageFormatterService } from '../message-formatter/message-formatter.service';
import { ConfigService } from '@nestjs/config';
import { ConfigTypes } from '../config/config.types';
import { AppConfig } from '../config/app.config';

@Injectable()
export class LoggerService {
  constructor(
    private messageFormatterService: MessageFormatterService,
    private readonly configService: ConfigService<ConfigTypes>,
  ) {}

  log() {
    const prefixMessage =
      this.configService.get<AppConfig>('app')?.prefixMessage || 'hello';
    console.log(
      this.messageFormatterService.format(`${prefixMessage}  Hello World`),
    );
  }
}
