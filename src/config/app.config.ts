import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export interface AppConfig {
  port: number;
  prefixMessage: string;
}

export const appValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
  PREFIX_MESSAGE: Joi.string().default('Hello World!'),
});

export const appConfig = registerAs(
  'app',
  (): AppConfig => ({
    port: parseInt(process.env.PORT || '3000', 10) || 3000,
    prefixMessage: process.env.PREFIX_MESSAGE || 'Hello World!',
  }),
);
