import { HttpStatus, applyDecorators } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiExtraModels,
    ApiForbiddenResponse,
    ApiOkResponse,
    getSchemaPath,
} from '@nestjs/swagger';
import { Pattern4xErrorDto } from '../dtos/pattern-4x-error.dto';

export const Api403 = ( ) => {
    return applyDecorators(
        ApiExtraModels( Pattern4xErrorDto ),
        ApiBadRequestResponse({
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
                    } ,
                    timestamp: {
                        type: 'Date',
                        example: new Date(),
                    },
                },
            },
        }),
    );
};
