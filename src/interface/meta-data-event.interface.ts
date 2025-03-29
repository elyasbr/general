import { ICommand, IEvent, IQuery } from '@nestjs/cqrs';
export interface IEventMeta<TEvent extends IEvent> {
  createAction : number
  param : TEvent
}
export interface  IMetaDataEvent<
  T extends ICommand | IQuery = ICommand | IQuery ,
  TEvent extends IEvent = IEvent
> {
  userId? : string
  ip? : string
  userAgent? : string
  aggregateRootId : string
  parentServiceName : string
  param : T
  createAction : number
  events? : IEventMeta<TEvent>


}