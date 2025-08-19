import { MongoServerError } from 'mongodb';
import { Inject } from '@nestjs/common';
import { IDuplicateMongo } from './interface/duplicate-error.mongo';
import { AppError } from './error/app-error';
import { TypeErrorCode } from './enums/error-type.enum';
import { RpcException } from '@nestjs/microservices';

export class ThrowRpcService {
  constructor(
    @Inject('DUPLICATE_CLASS') public readonly secondService?: IDuplicateMongo,
  ) {}
  handler(msg: Error) {

    if (msg.name == AppError.name) {
      throw new RpcException(new AppError(msg.message, msg['typeError']));
    }
    if (msg.name == 'MongoServerError') {
      const msg1: MongoServerError = <MongoServerError>msg;
      if (msg1.code == 11000) this.secondService.handler(msg1.message);
    }
    throw new RpcException(new AppError(msg.message, TypeErrorCode.ForBIDDEN));
  }
}