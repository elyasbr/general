import { HttpStatus, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PaginateDto } from '../dtos';


export const Api201Array = (resultDto: any) => {
    return applyDecorators(
      ApiExtraModels(PaginateDto, resultDto),
      ApiOkResponse({
          description: 'FindOne Response',
          schema: {
              type: 'object',
              properties: {
                  statusCode: {
                      type: 'number',
                      example: HttpStatus.CREATED,
                  },
                  result: {
                      type: 'array',
                      items: {
                          $ref: getSchemaPath(resultDto),
                      }
                  },
                  timestamp: {
                      type: 'string',
                      format: 'date-time',
                      example: new Date().toISOString(),
                  },
              },
          },
      }),
    );
};
