import { applyDecorators } from '@nestjs/common';
import {
    ApiExtraModels,
    ApiConflictResponse,
    getSchemaPath,
} from '@nestjs/swagger';
import { Pattern4xErrorDto } from '../dtos/pattern-4x-error.dto';

export const Api409 = () => {
    return applyDecorators(
      ApiExtraModels(Pattern4xErrorDto),
      ApiConflictResponse({
          description: 'Conflict Response',
          schema: {
              type: 'object',
              properties: {
                  statusCode: {
                      type: 'number',
                      example: 409,
                  },
                  message: {
                      allOf: [{ $ref: getSchemaPath(Pattern4xErrorDto) }],
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
