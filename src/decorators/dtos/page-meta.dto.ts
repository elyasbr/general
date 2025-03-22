import { ApiProperty } from '@nestjs/swagger';

export class PageMetaDto {
  @ApiProperty()
  readonly  page :number

  @ApiProperty()
  readonly limit:number

  @ApiProperty()
  readonly itemCount : number

  @ApiProperty()
  readonly  pageCount : number

  @ApiProperty()
  readonly hasPreviousPage : boolean

  @ApiProperty()
   hasNextPage :Boolean
  constructor(page:number , limit : number , itemCount : number) {
    this.page= page
    this.limit=limit
    this.itemCount=itemCount
    this.pageCount=Math.ceil(itemCount / limit)
    this.hasPreviousPage = page > 1
    this.hasNextPage = page < this.pageCount

  }
}