/* eslint-disable prettier/prettier */
import { Injectable, HttpStatus, Inject, HttpException } from '@nestjs/common';

@Injectable()
export class HackatonService {
  // constructor() {}

  public async sendImage(data) {
    console.log(`funciona:`, data.name);
    return {
      message: `Hello hackaton gcp ${data.name}`
    }
  }
}
