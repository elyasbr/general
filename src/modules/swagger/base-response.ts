import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BaseResponse {

  @ApiProperty({
    type :Date
  })
  createdAt : Date
}