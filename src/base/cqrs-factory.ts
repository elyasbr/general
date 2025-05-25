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


  public   createCommand( data: any,user :GetUserDto) :ICommand {
    return (this.commandFactory as any).createCommand(data ,user)
  }

  public   updateCommand( ID : string ,data: any ,  user :GetUserDto) :ICommand {
    return (this.commandFactory as any).updateCommand(ID ,data  , user)
  }
  public   deleteCommand( ID: string ,   user :GetUserDto) :ICommand {
    return (this.commandFactory as any).deleteCommand(ID  , user)
  }

  public   getQuery( ID: string ,   user :GetUserDto) :IQuery {
    return (this.commandFactory as any).getQuery(ID  , user)
  }

  public   paginationQuery( data: any ,  user :GetUserDto) :IQuery {
    const {page , limit , filter , sort } = data
    return (this.commandFactory as any).paginationQuery(page , limit , filter , sort , user )
  }
  public   paginationFromParentQuery( parentId :string ,data: any ,  user :GetUserDto) :IQuery {
    const {page , limit , filter , sort } = data
    return (this.commandFactory as any).paginationFromParentQuery(parentId ,page , limit , filter , sort , user )
  }
}
