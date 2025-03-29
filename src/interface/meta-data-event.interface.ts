import { IEvent } from '@nestjs/cqrs';
export interface IEventMeta {
  createAction : number
  param : IEvent
}
export interface  IMetaDataEvent<T extends IEvent > {
  userId? : string
  ip? : string
  userAgent? : string
  aggregateRootId : string
  parentServiceName : string
  param : T
  createAction : number
  events? : IEventMeta


}