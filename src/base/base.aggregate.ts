import { AggregateRoot } from '@nestjs/cqrs';
import { v7 as uuidv4 } from 'uuid';

export abstract class BaseAggregate<TEntity> extends AggregateRoot{
  private readonly _ID: string;
  private readonly _state: TEntity;
   protected constructor(state :TEntity) {
     super();
     this._ID = uuidv4();
     this._state=state
  }
  get ID(): string {
    return this._ID;
  }
  getState() :TEntity {
     return this._state
  }


}
