import { ICommand, IQuery } from '@nestjs/cqrs';
import { Controller } from '@nestjs/common';
import { GetUserDto } from '../dtos';
@Controller()
export abstract  class   BaseCommandFactory<TCreateDto , TUpdateDto , TFilter , TSort> {
  abstract createCommand( data : TCreateDto , userId? : string ,  user? : GetUserDto) : ICommand
  abstract updateCommand( ID : string ,data : TUpdateDto  , userId? : string , user? : GetUserDto) : ICommand
  abstract deleteCommand(ID : string ,  userId? : string , user? : GetUserDto) :ICommand
  abstract getQuery(ID : string , userId? : string ,  user? : GetUserDto) :IQuery
  abstract paginationQuery(page : number , limit : number , filter :TFilter , sort : TSort) :IQuery | undefined
  abstract paginationFromParentQuery(parentId : string ,page : number , limit : number , filter :TFilter , sort : TSort) :IQuery | undefined



}

