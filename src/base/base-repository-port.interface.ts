import { ClientSession } from 'mongoose';
import { PaginateDto } from '../dtos';
import { IPaginate } from '../modules';
import { Base } from '../modules';

export interface IBaseRepositoryPort<TGet , TPaginate ,TFilter ,TSort,TSchema extends Base , TEntity extends  Base> {
   startTransaction() : Promise<ClientSession>
   rollBackTransaction(session : ClientSession) : Promise<void>
   commitTransaction(session : ClientSession) : Promise<void>
   create(mimeType: TEntity): Promise<TEntity>;
   getOneById(mimeTypeId : string): Promise<TEntity | null>;
   getOneByIdAndUpdate(mimeTypeId : string , mimeType: TEntity , session? : ClientSession): Promise<TEntity>;
   getPagination(page : number , limit :number ,filter : TFilter , sort :TSort ) :Promise<PaginateDto<TPaginate>>
   getArray(filter : TFilter , sort :TSort ) : Promise<IPaginate<TEntity>>
   getArrayWithPage(page : number , limit : number ,filter : TFilter , sort :TSort ) : Promise<IPaginate<TEntity>>
   getOneByIdAndDelete(mimeTypeId : string , session? : ClientSession):Promise<TEntity>

}