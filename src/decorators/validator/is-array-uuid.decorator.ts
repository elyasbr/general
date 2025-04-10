import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import {  validate as uuidValidate} from 'uuid';

export function IsArrayUUID(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsArrayUUID',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (Array.isArray(value)) {
            return value.every(item => uuidValidate(item) ) // بررسی تمام آیتم‌ها
          }
          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be an array of valid UUIDs`;
        },
      },
    });
  };
}
