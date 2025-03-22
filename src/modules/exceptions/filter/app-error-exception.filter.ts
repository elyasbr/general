import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus, BadRequestException, ForbiddenException,
} from '@nestjs/common';

import { FastifyReply } from 'fastify';
import { AppError } from '../error/app-error';

@Catch(AppError)
export class AppExceptionFilter implements ExceptionFilter {

  catch(exception: AppError, host: ArgumentsHost) {
    console.log(exception.httpCode)
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request: Request = ctx.getRequest<Request>();
    const url = request.headers['referer'] || 'No Referer';
    console.log(url)
    response.status(<number>exception.httpCode).send({
      statusCode :  <number>exception.httpCode ,
      message : JSON.parse(exception.message),
      back : request.url ,
      front : url ,
      timestamp: new Date().toISOString(),
    });
  }
}
