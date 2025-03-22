import { HttpStatus, applyDecorators } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiConflictResponse,
    ApiExtraModels,
    ApiOkResponse,
    getSchemaPath,
} from '@nestjs/swagger';
import { Pattern4xErrorDto } from '../dtos/pattern-4x-error.dto';






export const Api409 = ( ) => {
    return applyDecorators(
        ApiExtraModels( Pattern4xErrorDto ),
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
                        oneOf: [

                            {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    $ref: getSchemaPath(Pattern4xErrorDto),
                                },
                            },
                        ],
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
