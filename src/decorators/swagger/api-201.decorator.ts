
import { HttpStatus, applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export const Api201 = (  resultDto: any) => {
    return applyDecorators(
        ApiExtraModels(resultDto),
        ApiCreatedResponse({
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
                        $ref: getSchemaPath(resultDto),
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
