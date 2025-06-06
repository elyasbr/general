import { HttpStatus, applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { Pattern4xErrorDto } from '../../dtos/pattern-4x-error.dto';
export const Api400 = ( ) => {
    return applyDecorators(
        ApiExtraModels( Pattern4xErrorDto ),
        ApiBadRequestResponse({
            description: 'Bad Request Object Response',
            schema: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'number',
                        example: 400,
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
