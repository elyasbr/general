import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ThrowService } from './throw.service';

@Module({})
export class ThrowModule {
  static forRoot(duplicatedService: any): DynamicModule {
    const provider: Provider = {
      provide: 'DUPLICATE_CLASS',
      useClass: duplicatedService
    };
    return {
      module: ThrowModule,
      providers: [provider , ThrowService],
      exports: [ThrowService  ]
    };
  }
  static forStandard(): DynamicModule {

    return {
      module: ThrowModule,
      providers: [ ThrowService],
      exports: [ThrowService  ]
    };
  }
}