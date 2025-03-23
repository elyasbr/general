
import { HttpStatus, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export const Api200Delete = (  ) => {
    return applyDecorators(

        ApiOkResponse({
            description: 'FindOne Response',
            schema: {
                type: 'object',
                properties: {
                    statusCode: {
                        type: 'number',
                        example: HttpStatus.OK,
                    } ,
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
