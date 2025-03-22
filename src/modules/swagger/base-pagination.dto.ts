import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PublicError } from '../exceptions';


export class BasePaginationDto {
  @ApiProperty({
    default : 1
  })
  @IsNumber({} ,{
   message : PublicError.PAGE_FIELD_PAGINATION_IS_REQUIRED.toString()
  })
  @Min( 1, {
    message : PublicError.MIN_VALUE_PAGE_FIELD_PAGINATION_IS_REQUIRED.toString()

  })
  page: number; // شماره صفحه

  @ApiProperty({
    default: 10
  })
  @IsNumber({} ,{
    message : PublicError.LIMIT_FIELD_PAGINATION_IS_REQUIRED.toString()

  })
  @Min(5 ,{
    message : PublicError.MIN_VALUE_LIMIT_FIELD_PAGINATION_IS_REQUIRED.toString()

  })
  limit: number; // تعداد نتایج در هر صفحه


}