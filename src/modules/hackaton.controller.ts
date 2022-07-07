/* eslint-disable prettier/prettier */
import { Controller, HttpCode, HttpStatus, Post, Get, Body, Param, ParseIntPipe, Put } from '@nestjs/common';
import { HackatonService } from './hackaton.service';

@Controller('hackaton')
export class HackatonController{
  constructor(
    private readonly hackatonService: HackatonService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('upload')
  async postImage(@Body() payload: any) {
    return this.hackatonService.sendImage(payload);
  }
}
