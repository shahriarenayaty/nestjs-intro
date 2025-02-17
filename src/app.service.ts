import { Injectable } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { TypedConfigService } from './config/typed-config.service';

@Injectable()
export class AppService {
  constructor(
    private logger: LoggerService,
    private readonly configService: TypedConfigService,
  ) {}
  getHello(): string {
    this.logger.log();
    return 'Hello World!';
  }
}
