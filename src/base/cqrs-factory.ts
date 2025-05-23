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


  public   createCommand( data: any,userId? : string , user? :GetUserDto) :ICommand {
    return (this.commandFactory as any).createCommand(data, userId ,user)
  }

  public   updateCommand( ID : string ,data: any , userId? : string , user? :GetUserDto) :ICommand {
    return (this.commandFactory as any).updateCommand(ID ,data , userId , user)
  }
  public   deleteCommand( ID: string , userId? : string ,  user? :GetUserDto) :ICommand {
    return (this.commandFactory as any).deleteCommand(ID , userId , user)
  }

  public   getQuery( ID: string , userId? : string ,  user? :GetUserDto) :IQuery {
    return (this.commandFactory as any).getQuery(ID , userId , user)
  }

  public   paginationQuery( data: any ,  user? :GetUserDto) :IQuery {
    const {page , limit , filter , sort } = data
    return (this.commandFactory as any).paginationQuery(page , limit , filter , sort , user )
  }
  public   paginationFromParentQuery( parentId :string ,data: any ,  user? :GetUserDto) :IQuery {
    const {page , limit , filter , sort } = data
    return (this.commandFactory as any).paginationFromParentQuery(parentId ,page , limit , filter , sort )
  }
}
