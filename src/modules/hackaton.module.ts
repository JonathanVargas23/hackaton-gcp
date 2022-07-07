/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HackatonService } from './hackaton.service';
import { HackatonController } from './hackaton.controller';

@Module({
    imports: [],
    controllers: [HackatonController],
    providers: [HackatonService],
    exports: [HackatonService],
})
export class HackatonModule {}
