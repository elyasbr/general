import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EStatusAction } from '../../enums';

export class BaseResponse {

  @ApiProperty({
    type :Date
  })
  createdAt : Date

  @ApiProperty({
    type :Date
  })
  updatedAt : Date

  @ApiProperty({
    enum : EStatusAction
  })
  status : EStatusAction
}