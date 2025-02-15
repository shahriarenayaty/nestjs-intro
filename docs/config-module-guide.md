# Config Module Guide

This document explains why and how to add the ConfigModule to your NestJS project, using the implemented example.

## Benefits of Using ConfigModule
- Centralizes configuration.
- Enables validation and default values.
- Simplifies environment-specific settings.

## Configuration Validation Options

The ConfigModule is registered with the options:
- `allowUnknown: true`: This setting forbids environment variables that are not defined in the schema. Although our system may always add extra variables,because our system may always add extra variables, we set `allowUnknown` to `true` to prevent these variables from causing errors. If `allowUnknown` were set to `false`, any unexpected environment variables could lead to validation errors and potentially disrupt the application. 
- `abortEarly: false`: This stops validation at the first error encountered, By setting `abortEarly` to `false`, all validation errors for environment variables are collected and returned in a single message. This is beneficial because it allows developers to see all issues at once, rather than addressing them one by one, which can be more efficient and less time-consuming.

## Example Files
- **app.config.ts**: Defines configuration schema, default values, and environment variable processing.
- **config.types.ts**: Provides TypeScript interfaces for the configuration object.
- **AppModule**: Loads the configuration globally and validates it using Joi.

## How It Works
1. **Configuration Definition**  
   The `app.config.ts` file uses `registerAs` to create a namespaced configuration and Joi to validate environment variables.
   ```typescript
   // Example snippet from app.config.ts
   export const appConfig = registerAs(
     'app',
     (): AppConfig => ({
       port: parseInt(process.env.PORT || '3000', 10) || 3000,
       prefixMessage: process.env.PREFIX_MESSAGE || 'Hello World!',
     }),
   );
   ```

2. **TypeScript Type Checking**  
   The `config.types.ts` file defines the `ConfigTypes` interface to ensure correct types are used.
   ```typescript
   // Example snippet from config.types.ts
   export interface ConfigTypes {
     app: AppConfig;
   }
   ```

3. **Global Module Registration**  
   The `AppModule` loads the configuration globally, ensuring that configuration is accessible throughout the app.
   ```typescript
   // Example snippet from AppModule
   ConfigModule.forRoot({
     isGlobal: true,
     load: [appConfig],
     validationSchema: appValidationSchema,
     validationOptions: { allowUnknown: true, abortEarly: false },
   }),
   ```

## Using ConfigService

The ConfigService is used to access configuration values in your application. For example, the LoggerService retrieves the `prefixMessage` from configuration and logs a formatted message:
```typescript
constructor(
   private readonly configService: ConfigService<ConfigTypes>,
){}
// Example snippet from LoggerService
const prefixMessage =
  this.configService.get<AppConfig>('app')?.prefixMessage || 'hello';
console.log(this.messageFormatterService.format(`${prefixMessage}  Hello World`));
```
This pattern allows you to centralize configuration management and keep your business logic separate from environment settings.

## Conclusion
Integrating the ConfigModule in this manner improves maintainability and ensures robust configuration management across environments.
