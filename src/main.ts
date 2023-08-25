import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = parseInt(process.env.PORT, 10) || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(PORT, () => {
    console.log(`🚀 Application running at port ${PORT}`);
  });
}
bootstrap();
