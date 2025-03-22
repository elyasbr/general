import { HttpStatus, applyDecorators } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiExtraModels,
    ApiForbiddenResponse, ApiNotFoundResponse,
    ApiOkResponse,
    getSchemaPath,
} from '@nestjs/swagger';
import { Pattern4xErrorDto } from '../dtos/pattern-4x-error.dto';






export const Api404 = ( ) => {
    return applyDecorators(
        ApiExtraModels( Pattern4xErrorDto ),
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
