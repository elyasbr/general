import { applyDecorators } from '@nestjs/common';
import {
    ApiExtraModels,
    ApiForbiddenResponse,
    getSchemaPath,
} from '@nestjs/swagger';
import { Pattern4xErrorDto } from '../../dtos/pattern-4x-error.dto';

export const Api403 = () => {
    return applyDecorators(
      ApiExtraModels(Pattern4xErrorDto),
      ApiForbiddenResponse({
          description: 'Forbidden Response',
          schema: {
              type: 'object',
              properties: {
                  statusCode: {
                      type: 'number',
                      example: 403,
                  },
                  message: {
                      type: 'object',
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
