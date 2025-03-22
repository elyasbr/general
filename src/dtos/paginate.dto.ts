import { ApiProperty } from '@nestjs/swagger';
import { PageMetaDto } from './page-meta.dto';

export class PaginateDto<T> {
 @ApiProperty()
 readonly  data : T[]
 @ApiProperty()
  readonly metaData : PageMetaDto
  constructor(_data :T[] , _page : number , _limit : number , _itemCount : number) {
   this.data=_data
   this.metaData=new PageMetaDto(_page , _limit , _itemCount)
  }

}