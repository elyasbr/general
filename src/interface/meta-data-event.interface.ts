import { ICommand, IQuery } from '@nestjs/cqrs';

export interface IEventMeta {
  serviceName : string
  createAction : Date
  param : ICommand | IQuery
}
export interface  IMetaDataEvent {
  userId? : string
  ip? : string
  userAgent? : string
  aggregateRootId : string
  parentServiceName : string
  param : ICommand | IQuery
  createAction : Date
  events? : IEventMeta


}