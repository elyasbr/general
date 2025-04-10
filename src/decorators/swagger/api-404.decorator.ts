import { applyDecorators } from '@nestjs/common';
import {
    ApiExtraModels,
    ApiNotFoundResponse,
    getSchemaPath,
} from '@nestjs/swagger';
import { Pattern4xErrorDto } from '../../dtos/pattern-4x-error.dto';

export const Api404 = () => {
    return applyDecorators(
      ApiExtraModels(Pattern4xErrorDto),
      ApiNotFoundResponse({
          description: 'Not Found Response',
          schema: {
              type: 'object',
              properties: {
                  statusCode: {
                      type: 'number',
                      example: 404,
                  },
                  message: {
                      $ref: getSchemaPath(Pattern4xErrorDto),
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
