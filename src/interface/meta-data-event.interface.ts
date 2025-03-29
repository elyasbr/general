import { ICommand, IQuery } from '@nestjs/cqrs';
export interface IEventMeta {
  createAction : number
  param : ICommand | IQuery
}
export interface  IMetaDataEvent<T extends ICommand | IQuery = ICommand | IQuery> {
  userId? : string
  ip? : string
  userAgent? : string
  aggregateRootId : string
  parentServiceName : string
  param : T
  createAction : number
  events? : IEventMeta


}