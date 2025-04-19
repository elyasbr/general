import { MessagePattern } from '@nestjs/microservices';

export class BasePattern {

  @MessagePattern('ping')
  ping() {
    return { status: 'online' };
  }

}