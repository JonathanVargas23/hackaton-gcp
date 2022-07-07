/* eslint-disable prettier/prettier */
import { Controller, HttpCode, HttpStatus, Post, Get, Body, Param, ParseIntPipe, Put, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { HackatonService } from './hackaton.service';
import { Express } from 'express';

@Controller('hackaton')
export class HackatonController{
  constructor(
    private readonly hackatonService: HackatonService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseInterceptors(AnyFilesInterceptor())
  @Post('upload')
  async postImage(
    @Body() payload: any,
  ) {
    return this.hackatonService.sendImage(payload);
  }
}
