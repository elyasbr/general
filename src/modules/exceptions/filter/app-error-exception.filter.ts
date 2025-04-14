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
  constructor() {
  }

  catch(exception: AppError, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request: Request = ctx.getRequest<Request>();
    const url = request.headers['referer'] || 'No Referer';
    const statusCode =<number>exception.httpCode
    console.log("status code = " , <number>exception.httpCode)
    if (statusCode==401) {
      console.log("401")
      response.status(<number>exception.httpCode).send({
        statusCode :  <number>exception.httpCode ,
        timestamp: new Date().toISOString(),
      });
    } else  {
      console.log("901")
      response.status(<number>exception.httpCode).send({
        statusCode :  <number>exception.httpCode ,
        message : JSON.parse(exception.message),
        timestamp: new Date().toISOString(),
      });
    }

  }
}
