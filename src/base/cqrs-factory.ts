import { ICommand, IQuery } from '@nestjs/cqrs';
import { Api400, Api403, Api404, Api409 } from '../decorators';

@Api400()
@Api403()
@Api404()
@Api409()
export class CqrsFactory<T > {

  constructor( private readonly commandFactory: T ) {

  }


  public   createCommand( data: any) :ICommand {
    return (this.commandFactory as any).createCommand(data)
  }

  public   updateCommand( ID : string ,data: any) :ICommand {
    return (this.commandFactory as any).updateCommand(ID ,data)
  }
  public   deleteCommand( ID: string) :ICommand {
    return (this.commandFactory as any).deleteCommand(ID)
  }

  public   getQuery( ID: string) :IQuery {
    return (this.commandFactory as any).getQuery(ID)
  }

  public   paginationQuery( data: any) :IQuery {
    const {page , limit , filter , sort } = data
    return (this.commandFactory as any).paginationQuery(page , limit , filter , sort )
  }

}
