import { ICommand, IQuery } from '@nestjs/cqrs';
import { Api400, Api403, Api404, Api409 } from '../decorators';

@Api400()
@Api403()
@Api404()
@Api409()
export class CqrsFactory<T > {

  constructor( private readonly commandFactory: T ) {

  }


  public   createCommand( data: any,userId? : string) :ICommand {
    return (this.commandFactory as any).createCommand(data, userId)
  }

  public   updateCommand( ID : string ,data: any , userId? : string) :ICommand {
    return (this.commandFactory as any).updateCommand(ID ,data , userId)
  }
  public   deleteCommand( ID: string , userId? : string) :ICommand {
    return (this.commandFactory as any).deleteCommand(ID , userId)
  }

  public   getQuery( ID: string , userId? : string) :IQuery {
    return (this.commandFactory as any).getQuery(ID , userId)
  }

  public   paginationQuery( data: any) :IQuery {
    const {page , limit , filter , sort } = data
    return (this.commandFactory as any).paginationQuery(page , limit , filter , sort )
  }
  public   paginationFromParentQuery( parentId :string ,data: any) :IQuery {
    const {page , limit , filter , sort } = data
    return (this.commandFactory as any).paginationFromParentQuery(parentId ,page , limit , filter , sort )
  }
}
