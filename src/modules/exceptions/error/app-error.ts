// shared-errors.ts

import { HttpStatus } from '@nestjs/common';
import { TypeErrorCode } from '../enums/error-type.enum';


export class AppError extends Error {
  httpCode : HttpStatus
  constructor(error : string , errorType? : TypeErrorCode) {
    super();
    this.name = this.constructor.name;
    this.message =error
    this.httpCode=HttpStatus.NOT_FOUND
    switch (errorType) {
      case TypeErrorCode.DUPLICATED_ERROR :
        this.httpCode = HttpStatus.CONFLICT;
        break
      case TypeErrorCode.NOT_FOUND :
        this.httpCode = HttpStatus.NOT_FOUND;
        break
      case TypeErrorCode.ForBIDDEN :
        this.httpCode = HttpStatus.FORBIDDEN;
        break
      case TypeErrorCode.UNAUTHORIZE :
        this.httpCode = HttpStatus.UNAUTHORIZED;
        break
      case TypeErrorCode.SERVICE_DISABLE :
        this.httpCode = HttpStatus.SERVICE_UNAVAILABLE;
        break
      case TypeErrorCode.Error_DISABLE :
        this.httpCode = HttpStatus.EXPECTATION_FAILED;
        break
      default:
        this.httpCode = HttpStatus.NOT_FOUND;
        break
    }
  }
}




