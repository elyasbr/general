import { Module, DynamicModule, Global } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { Logger } from '@nestjs/common';
import { Glob } from 'glob';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Global()
@Module({})
export class DynamicMongoModule {
  static forRootAsync(connectionName: string): DynamicModule {
    return {
      module: DynamicMongoModule,
      imports: [

        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService ): Promise<MongooseModuleOptions> => {
            const uri = configService.get<string>(`MONGO_URI_${connectionName.toUpperCase()}`)
            const maxRetries = 2; // Retry count
            const delay = 3000; // Delay between retries in milliseconds

            const connectWithRetry = async (retries: number): Promise<MongooseModuleOptions> => {
              try {
                Logger.log(uri ,'Connect Mongo Db: ' );
                // The retry mechanism is now handled by MongooseModule
                return {
                  uri,
                  retryAttempts: retries, // Configure retry attempts here
                  retryDelay: delay, // Delay between retry attempts
                };

              } catch (error) {
                if (retries <= 0) {
                  Logger.error('MongoDB Connection Error: ', error.message);
                  throw new Error(`Failed to connect to MongoDB after multiple attempts: ${error.message}`);
                }
                Logger.warn(`MongoDB connection failed. Retrying... (${maxRetries - retries + 1}/${maxRetries})`);
                await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retry
                return connectWithRetry(retries - 1); // Retry the connection
              }
            };

            return connectWithRetry(maxRetries);
          },
          inject: [ConfigService ] ,

          connectionName :connectionName
        }),
      ],
    };
  }
}
