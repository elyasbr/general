import { HttpStatus, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PageMetaDto, PaginateDto } from '../dtos';



export const Api201Pagination = (resultDto: any) => {
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
                      type: 'object',
                      properties: {
                          data: {
                              type: 'array',
                              items: {
                                  $ref: getSchemaPath(resultDto),
                              },
                          },
                          metaData: {
                              $ref: getSchemaPath(PageMetaDto),
                          },
                      },
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
