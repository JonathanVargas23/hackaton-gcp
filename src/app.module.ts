/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HackatonModule } from './modules/hackaton.module';
import * as cors from 'cors';

@Module({
  imports: [
    HackatonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(cors()).forRoutes('(.*)');
//   }
// }
