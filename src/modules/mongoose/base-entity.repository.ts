import { ClientSession, FilterQuery, ProjectionType, QueryOptions, UpdateQuery } from 'mongoose';
import { EntityRepository } from './entity.repository';
import { Base } from './base-schema';
import { IPaginate } from './interface/paginate-interface';
import { PaginateDto } from '../../dtos';

export abstract class BaseEntityRepository<
  TGet ,
  TPaginate ,

  TSort ,
  TSchemaRead extends Base,
  TSchemaWrite extends Base,
  TEntity extends Base
> extends EntityRepository<TGet , TPaginate ,TSchemaRead,TSchemaWrite, TEntity> {

  async save(entity :TEntity , session? :ClientSession) :Promise<TEntity> {

    return await this.create(entity, session)
  }

  async getOneId( id:string ,
                     projection?: ProjectionType<TSchemaRead>,
                     options?: QueryOptions<TSchemaRead>,): Promise<TEntity | null>  {
    return this.findOne({
      id: id
    } , projection , options)
  }

  async getOne(  entityFilterQuery?: FilterQuery<TSchemaRead> ,
                     projection?: ProjectionType<TSchemaRead>,
                     options?: QueryOptions<TSchemaRead>,): Promise<TEntity | null> {
    return this.findOne( entityFilterQuery, projection , options)
  }
  async getOneDelete(   entityFilterQuery?: FilterQuery<TSchemaRead>,
                      options?: QueryOptions<TSchemaRead>,):  Promise<TEntity | null> {
    return this.findOneAndDelete( entityFilterQuery , options)
  }

  async getOneUpdate(   entityFilterQuery: FilterQuery<TSchemaWrite>,
                      update: UpdateQuery<TSchemaWrite>,
                      options?: QueryOptions<TSchemaWrite>,):  Promise<TEntity | null> {
    return await this.findOneAndUpdate(entityFilterQuery, update, options)
  }

  async getArrayWithPage(  page :number , limit :number ,
                   entityFilterQuery?: FilterQuery<TSchemaRead>,
                           sortOptions?: TSort,
                        projection?: ProjectionType<TSchemaRead>,
                        options?: QueryOptions<TSchemaRead>,):  Promise<IPaginate<TEntity>> {
    const findEntity = await this.find( {...entityFilterQuery} ,projection ,{
      ...options ,
      limit  ,
      skip : (page - 1) * limit ,
      sort : sortOptions ,

    })
    const count =await this.getDocumentCount(entityFilterQuery)
    return {
      entities : findEntity ,
      rows : findEntity.length ,
      count : Number(count)
    }
  }
  async getArray(
                           entityFilterQuery?: FilterQuery<TSchemaRead>,
                           sortOptions?: TSort,
                           projection?: ProjectionType<TSchemaRead>,
                           options?: QueryOptions<TSchemaRead>,):  Promise<IPaginate<TEntity>> {
    const findEntity = await this.find( {...entityFilterQuery} ,projection ,{
      ...options ,
    })
    const count =await this.getDocumentCount(entityFilterQuery)
    return {
      entities : findEntity ,
      rows : findEntity.length ,
      count : Number(count)
    }
  }



  async getPagination<TEntity>( page :number , limit :number ,
                       entityFilterQuery?: FilterQuery<TSchemaRead>,
                       sortOptions?: TSort,
                        projection?: ProjectionType<TSchemaRead>,
                        options?: QueryOptions<TSchemaRead>,):  Promise<PaginateDto<TPaginate>> {
    const findEntity = await this.find( {...entityFilterQuery} ,projection ,{
      ...options ,
      limit  ,
      skip : (page - 1) * limit ,
      sort : sortOptions ,

    })
    const final:any[]=[]
    findEntity.forEach((itemEntity)=>{
      final.push(
        this.entitySchemaFactory.toPaginate(itemEntity)
      )
    })
    const count =await this.getDocumentCount(entityFilterQuery)
    return new PaginateDto<TPaginate>(final , page , limit , Number(count))
  }


  async getSession() : Promise<ClientSession> {
    return await  this.startSession()
  }

  async commitSession(session : ClientSession) : Promise<void> {
    return await  this.commitTransaction(session)
  }

  async rollBackSession(session : ClientSession) : Promise<void> {
    return await  this.abortTransaction(session)
  }

}