import { AggregateRoot } from '@nestjs/cqrs';
import { Base } from './base-schema';



export interface EntitySchemaFactory<
  TGet ,
  TPaginate ,
  TSchema extends Base,
  TEntity extends Base
> {
  toSchema(entity: TEntity): TSchema;
  toEntity(entitySchema: TSchema): TEntity;
  toGet(entity: TEntity) : TGet
  toPaginate( entity: TEntity) : TPaginate
}