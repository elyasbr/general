import 'reflect-metadata';

export function ServiceName(name: string) {
  return (target: Function) => {
    Reflect.defineMetadata('serviceName', name, target);
  };
}