import { ApiHideProperty, ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EStatusAction } from '../../enums';

export class BaseResponse {

  @ApiHideProperty()
  createdAt : Date

  @ApiHideProperty()
  updatedAt : Date

  @ApiHideProperty()
  status : EStatusAction
}