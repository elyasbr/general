import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';

interface RmqModuleOptions {
  name: string
  host? : string
  port? : number
  user? : string
  password? : string
}
@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register({ name  }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            imports:[] ,
            useFactory: (configService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [`amqp://${configService.get("USER_RABBITMQ")}:${configService.get("PASSWORD_RABBITMQ")}@${configService.get("HOST_RABBITMQ") || '127.0.0.1'}:${configService.get("PORT_RABBITMQ")}`],
                queue:  `RABBIT_MQ_${name}_QUEUE` ,
                prefetchCount: 1 ,
                noAck :false ,
                queueOptions: {
                  durable: true,
                },
              },

            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }

  static registerCustom({ name ,host , port ,user , password  }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            imports:[] ,
            useFactory: (configService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [`amqp://${user}:${password}@${host || '127.0.0.1'}:${port}`],
                queue:  `RABBIT_MQ_${name}_QUEUE`
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
