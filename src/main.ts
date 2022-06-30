import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Xbox Live Clone ')
    .setDescription('API aplicação clone do Xbox Live com fins de estudo')
    .setVersion('1.0.0')
    .addServer('http://localhost:3333')
    .addTag('Status')
    .addTag('Users')
    .addTag('Products')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3333);
}
bootstrap();
