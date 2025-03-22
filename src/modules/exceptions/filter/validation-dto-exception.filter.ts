import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus, BadRequestException,
} from '@nestjs/common';

import { FastifyReply } from 'fastify';

@Catch(BadRequestException)
export class ValidationDtoExceptionFilter implements ExceptionFilter {

  catch(exception: any, host: ArgumentsHost) {
    const msg :[] = exception.getResponse().message;
    const ctx = host.switchToHttp();
    const status = exception.getStatus();
    const response = ctx.getResponse<FastifyReply>();
    response.status( status ).send({
      statusCode : HttpStatus.BAD_REQUEST,
      message : msg.map((item : string)=> {
        const result =item.split(".")
        if (result.length==1) return JSON.parse(item)
        if (result.length==2) return JSON.parse(result[1])
      }),
      timestamp: new Date().toISOString(),
    });
  }
}
