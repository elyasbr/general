import { ICommand, IQuery } from '@nestjs/cqrs';
import { Api400, Api403, Api404, Api409 } from '../decorators';
import { GetUserDto } from '../dtos';

@Api400()
@Api403()
@Api404()
@Api409()
export class CqrsFactory<T > {

  constructor( private readonly commandFactory: T ) {

  }


  public   createCommand( data: any,user? :GetUserDto , jwt? :string) :ICommand {
    return (this.commandFactory as any).createCommand(data ,user , jwt)
  }

  public   updateCommand( ID : string ,data: any ,  user? :GetUserDto , jwt? :string) :ICommand {
    return (this.commandFactory as any).updateCommand(ID ,data  , user , jwt)
  }

  public   deleteCommand( ID: string ,  user? :GetUserDto , jwt? :string) :ICommand {
    return (this.commandFactory as any).deleteCommand(ID  , user , jwt)
  }

  public   getQuery( ID: string , user? :GetUserDto , jwt? :string) :IQuery {
    return (this.commandFactory as any).getQuery(ID  , user , jwt)
  }

  public   paginationQuery( data: any ,  user? :GetUserDto , jwt? :string) :IQuery {
    const {page , limit , filter , sort } = data
    return (this.commandFactory as any).paginationQuery(page , limit , filter , sort , user , jwt )
  }
  public   paginationFromParentQuery( parentId :string ,data: any ,   user? :GetUserDto , jwt? :string) :IQuery {
    const {page , limit , filter , sort } = data
    return (this.commandFactory as any).paginationFromParentQuery(parentId ,page , limit , filter , sort , user , jwt )
  }
}
