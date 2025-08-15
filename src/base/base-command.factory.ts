import { ICommand, IQuery } from '@nestjs/cqrs';
import { Controller } from '@nestjs/common';
import { GetUserDto } from '../dtos';
@Controller()
export abstract  class   BaseCommandFactory<TCreateDto , TUpdateDto , TFilter , TSort> {
  abstract createCommand( data : TCreateDto ,   user? : GetUserDto) : ICommand
  abstract updateCommand( ID : string ,data : TUpdateDto  , user? : GetUserDto) : ICommand
  abstract deleteCommand(ID : string ,   user? : GetUserDto | undefined , jwt? :string ) :ICommand
  abstract getQuery(ID : string  ,  user? : GetUserDto | undefined , jwt? :string) :IQuery
  abstract paginationQuery(page : number , limit : number , filter :TFilter , sort : TSort , user? : GetUserDto ,  jwt? :string ) :IQuery | undefined
  abstract paginationFromParentQuery(parentId : string ,page : number , limit : number , filter :TFilter , sort : TSort ,user? : GetUserDto , jwt? :string ) :IQuery | undefined



}

