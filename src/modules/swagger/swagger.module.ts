import { INestApplication, Module } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SwaggerConfig } from './swagger.config';

@Module({})
export class SwaggerModuleConfig {
  static setup(app: INestApplication , port : number) :Array<string> {
    let final:Array<string>=[]
    const documentVersion1="docs/version1"
    final = final.concat([documentVersion1 ])
    const configV1 = SwaggerConfig.createConfigDevelope("CDN" ,'1.0' );
    const documentV1 = SwaggerModule.createDocument(app, configV1 ,);
    SwaggerModule.setup(documentVersion1, app, documentV1, SwaggerConfig.createCustomOptions());
    return final
  }
}