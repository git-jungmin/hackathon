import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
if (!globalThis.crypto) {
  globalThis.crypto = { randomUUID } as any;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:8080',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Hackathon API')
    .setDescription('The Hackathon API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
