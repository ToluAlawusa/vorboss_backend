import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WidgetsModule } from './widgets/widgets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.rtak6s7.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`,
    ),
    WidgetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
