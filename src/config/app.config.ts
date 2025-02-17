import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export interface AppConfig {
  port: number;
  prefixMessage: string;
}

export const appValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  PREFIX_MESSAGE: Joi.string().default('Hello World!'),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
});

export const appConfig = registerAs(
  'app',
  (): AppConfig => ({
    port: parseInt(process.env.PORT || '3000', 10) || 3000,
    prefixMessage: process.env.PREFIX_MESSAGE || 'Hello World!',
  }),
);
