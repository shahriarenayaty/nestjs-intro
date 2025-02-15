import { registerAs } from '@nestjs/config';

export interface AppConfig {
  port: number;
  prefixMessage: string;
}
export const appConfig = registerAs(
  'app',
  (): AppConfig => ({
    port: parseInt(process.env.PORT || '3000', 10) || 3000,
    prefixMessage: process.env.PREFIX_MESSAGE || 'Hello World!',
  }),
);
