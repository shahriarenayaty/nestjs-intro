import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfig } from './app.config';

export interface ConfigTypes {
  app: AppConfig;
  database: TypeOrmModuleOptions;
}
