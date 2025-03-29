import {
  ClientSession,
  FilterQuery,
  Model,
  ProjectionType,
  QueryOptions,
  Schema as MongooseSchema,
  UpdateQuery,
} from 'mongoose';
import { AggregateRoot } from '@nestjs/cqrs';
import { Base } from './base-schema';
import { EntitySchemaFactory } from './entity-schema.factory';

export abstract class EntityRepository<
  TGet ,
  TPaginate ,
  TSchemaRead extends Base,
  TSchemaWrite extends Base,
  TEntity extends Base
> {
  constructor(
    protected readonly entityModelRead: Model<TSchemaRead>,
    protected readonly entityModelWrite: Model<TSchemaWrite>,
    protected readonly entitySchemaFactory: EntitySchemaFactory<TGet , TPaginate ,TSchemaRead | TSchemaWrite, TEntity>  ) {


  }

  protected async create(entity: TEntity  , session?: ClientSession,): Promise<TEntity> {
    const entityDocument = new this.entityModelWrite(this.entitySchemaFactory.toSchema(entity));
    const res = await entityDocument.save({session});
    return this.entitySchemaFactory.toEntity(res);
  }

  protected async findOne(
    entityFilterQuery?: FilterQuery<TSchemaRead>,
    projection?: ProjectionType<TSchemaRead>,
    options?: QueryOptions<TSchemaRead>
  ): Promise<TEntity | null> {
    const filter = entityFilterQuery || {};
    const entity = await this.entityModelRead.findOne(filter, projection, options).exec();
    return entity ? this.entitySchemaFactory.toEntity(entity) : null;
  }
  protected async findOneAndUpdate(
    entityFilterQuery: FilterQuery<TSchemaWrite>,
    update: UpdateQuery<TSchemaWrite>,
    options?: QueryOptions<TSchemaWrite>,
  ): Promise<TEntity | null> {
    const filter = entityFilterQuery ;
    const queryOptions: QueryOptions<TSchemaWrite> = options ? { ...options, lean: true , new : true } : { lean: true , new : true };
    const entity = await this.entityModelWrite.findOneAndUpdate(filter, update, queryOptions).exec();
    return entity ? this.entitySchemaFactory.toEntity(entity) : null;
  }

  protected async findOneAndDelete(
    entityFilterQuery?: FilterQuery<TSchemaWrite>,
    options?: QueryOptions<TSchemaWrite>,
  ): Promise<TEntity | null> {
    const filter = entityFilterQuery || {};
    const queryOptions: QueryOptions<TSchemaWrite> = options ? { ...options, lean: true } : { lean: true };
    const entity = await this.entityModelWrite.findOneAndDelete(filter, queryOptions).exec();
    return entity ? this.entitySchemaFactory.toEntity(entity) : null;
  }

  protected async find(
    entityFilterQuery?: FilterQuery<TSchemaRead>,
    projection?: ProjectionType<TSchemaRead>,
    options?: QueryOptions<TSchemaRead>,
  ): Promise<TEntity[] > {
    const filter = entityFilterQuery || {};
    const queryOptions: QueryOptions<TSchemaRead> = options ? { ...options, lean: true } : { lean: true };
    return (
      await this.entityModelRead.find(filter, projection, queryOptions)
    ).map(entityDocument =>
      this.entitySchemaFactory.toEntity(entityDocument),
    );

  }

  protected async startSession(): Promise<ClientSession> {
    const session = await this.entityModelWrite.db.startSession();
    session.startTransaction(); // آغاز تراکنش
    return session;
  }
  protected async commitTransaction(session: ClientSession): Promise<void> {
    await session.commitTransaction(); // تأیید تراکنش
    await session.endSession(); // پایان جلسه
  }

  protected async abortTransaction(session: ClientSession): Promise<void> {
    await session.abortTransaction(); // لغو تراکنش
    await session.endSession(); // پایان جلسه
  }
  protected async getDocumentCount(
    entityFilterQuery?: FilterQuery<TSchemaRead>,
  ): Promise<number> {
    return this.entityModelRead.countDocuments(entityFilterQuery);
  }
}
