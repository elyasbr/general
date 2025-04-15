import { ICommand, IQuery } from '@nestjs/cqrs';
import { Controller } from '@nestjs/common';
@Controller()
export abstract  class   BaseCommandFactory<TCreateDto , TUpdateDto , TFilter , TSort> {
  abstract createCommand( data : TCreateDto , userId? : string) : ICommand
  abstract updateCommand( ID : string ,data : TUpdateDto  , userId? : string) : ICommand
  abstract deleteCommand(ID : string ,  userId? : string) :ICommand
  abstract getQuery(ID : string , userId? : string) :IQuery
  abstract paginationQuery(page : number , limit : number , filter :TFilter , sort : TSort) :IQuery | undefined
  abstract paginationFromParentQuery(parentId : string ,page : number , limit : number , filter :TFilter , sort : TSort) :IQuery | undefined



}

