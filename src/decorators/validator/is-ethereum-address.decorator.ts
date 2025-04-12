import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

function isValidEthereumAddress(value: string): boolean {
  const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/; // regex برای آدرس اتریوم
  return ethAddressRegex.test(value);
}

// Decorator سفارشی
export function IsEthereumAddress(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isEthereumAddress',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && isValidEthereumAddress(value);
        },
      },
    });
  };
}
