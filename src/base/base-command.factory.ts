import { ICommand, IQuery } from '@nestjs/cqrs';
import { Controller } from '@nestjs/common';
@Controller()
export abstract  class   BaseCommandFactory<TCreateDto , TUpdateDto , TFilter , TSort> {
  abstract createCommand( data : TCreateDto) : ICommand
  abstract updateCommand( ID : string ,data : TUpdateDto) : ICommand
  abstract deleteCommand(ID : string) :ICommand
  abstract getQuery(ID : string) :IQuery
  abstract paginationQuery(page : number , limit : number , filter :TFilter , sort : TSort) :IQuery


}

