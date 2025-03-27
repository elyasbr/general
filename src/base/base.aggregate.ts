import { AggregateRoot, EventPublisher } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';

export abstract class BaseAggregate extends AggregateRoot{
  private readonly _ID: string;
  private _state: any;
   protected constructor(_publisher : EventPublisher) {
     super();
     this._ID = uuidv4();
  }
  get id(): string {
    return this._ID;
  }


}
