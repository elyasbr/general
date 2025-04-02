import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export class SwaggerConfig {
  static createConfigDevelope(title:string ,version: string ) {
    return  new DocumentBuilder()
      .setTitle(title)
      .setVersion(version)
      .addTag('Your API Tag')
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'JWT',
          description: 'Enter JWT token',
          in: 'header',
        } ,
      )
      .addSecurityRequirements('bearer')
      .build()

  }

  static createCustomOptions(): SwaggerCustomOptions {
    return {
      customSiteTitle: 'User Management API',  // تغییر عنوان صفحه
      customfavIcon: 'https://example.com/favicon.ico',  // تغییر آیکون
      customCss: `
        .topbar { background-color: #333666; }
        .swagger-ui .info { margin: 20px 0; }
      `,  // اضافه کردن CSS سفارشی
    };
  }
}