import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig = registerAs(
  'database',
  (): TypeOrmModuleOptions => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10) || 5432,
      username: process.env.DB_USERNAME || 'ptgress',
      password: process.env.DB_PASSWORD || 'ptgress',
      database: process.env.DB_DATABASE || 'tasks',
      //   entities: [__dirname + '/../**/*.entity.{js,ts}'],
      //   synchronize: process.env.DB_SYNCHRONIZE === 'true',
    };
  },
);
