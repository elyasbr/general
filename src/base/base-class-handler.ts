export class BaseClassHandler {
  serviceName : string
  constructor() {

    this.serviceName = Reflect.getMetadata('serviceName', new.target) || 'UNKNOWN_SERVICE';

  }
}